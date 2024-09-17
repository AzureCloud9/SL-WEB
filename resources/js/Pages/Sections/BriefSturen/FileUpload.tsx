import React, { useState, ChangeEvent, useCallback } from "react";
import axios from "axios";
import { Button } from "@/shadcn/ui/button";
import upload from "../../../../assets/upload.svg";
import spinner from "../../../../assets/spinner.svg";
import { PDFDocument } from "pdf-lib";
import mammoth from "mammoth";
import Heading from "@/Components/heading/Heading";

interface FileUploadProps {
    onNext: (sessionDetails: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onNext }) => {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [fileError, setFileError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFileValid, setIsFileValid] = useState<boolean>(false);
    const [pageCount, setPageCount] = useState<number>(0);

    const handleFileChange = useCallback(
        async (event: ChangeEvent<HTMLInputElement>) => {
            const selectedFile = event.target.files?.[0];
            if (selectedFile) {
                setIsLoading(true);
                setFileError(null);
                setIsFileValid(false);
                const isValid = await validateFile(selectedFile);
                if (isValid) {
                    setTimeout(() => {
                        setFileName(selectedFile.name);
                        setFile(selectedFile);
                        setIsFileValid(true);
                        setFileError(null);
                        setIsLoading(false);
                    }, 2000); // Ensure the spinner shows for at least 2 seconds
                } else {
                    setFileError(
                        "The document exceeds the maximum allowed page limit of 12 pages."
                    );
                    setIsLoading(false);
                }
            } else {
                setFileError("No file selected.");
            }
        },
        []
    );

    const validateFile = useCallback(async (file: File): Promise<boolean> => {
        if (file.type === "application/pdf") {
            return await validatePDF(file);
        } else if (
            file.type === "application/msword" ||
            file.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
            return await validateWord(file);
        }
        return false;
    }, []);

    const validatePDF = useCallback(async (file: File): Promise<boolean> => {
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const pageCount = pdfDoc.getPageCount();
        setPageCount(pageCount);
        return pageCount <= 12;
    }, []);

    const validateWord = useCallback(async (file: File): Promise<boolean> => {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        const wordCount = result.value.split(/\s+/).length;
        const pageCount = Math.ceil(wordCount / 300); // Assuming an average of 300 words per page
        setPageCount(pageCount);
        return pageCount <= 12;
    }, []);

    const handleClick = useCallback(() => {
        const fileInput = document.getElementById(
            "file-upload"
        ) as HTMLInputElement;
        fileInput?.click();
    }, []);

    const handleNextClick = useCallback(async () => {
        if (file) {
            setIsLoading(true);
            try {
                const formData = new FormData();
                formData.append("file", file);

                const response = await axios.post("/uploads", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                setTimeout(() => {
                    onNext({
                        fileUpload: response.data.fileUpload,
                        pageCount: pageCount,
                    });
                    setIsLoading(false);
                }, 2000); // Ensure the spinner shows for at least 2 seconds
            } catch (error) {
                setFileError("Failed to upload file. Please try again.");
                setIsLoading(false);
            }
        }
    }, [file, pageCount, onNext]);

    return (
        <div className="flex flex-col items-center justify-center w-full pl-6 pr-6 mx-auto">
            <Heading
                title="PDF uploaden"
                text1="Upload hier uw PDF of Word-document dat u wilt versturen. Ons systeem accepteert beide formaten en zorgt ervoor dat uw documenten correct worden verwerkt. Houd er rekening mee dat uw PDF maximaal 12 pagina's mag bevatten."
                showButton={false}
                buttonText="Verstuur Nu"
                secondaryButtonText="Meer Informatie"
            />{" "}
            <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-gray-700 sr-only"
            >
                File Upload
            </label>
            <div
                className="border-2 mb-10 border-dashed px-6  border-gray-400 rounded-md w-full h-48 flex items-center justify-center cursor-pointer"
                onClick={handleClick}
            >
                <div className="flex flex-col items-center">
                    {isLoading ? (
                        <img
                            src={spinner}
                            className="w-12 h-12 animate-spin"
                            alt="Uploading"
                        />
                    ) : (
                        <img src={upload} className="w-12 h-12" alt="Upload" />
                    )}
                    <p className="text-gray-400 mt-2 text-sm w-[300px] text-center">
                        {fileName
                            ? `${fileName} geüpload (${pageCount} pagina's)`
                            : "Sleep een PDF- of Word-bestand hierheen of klik om een bestand te selecteren."}
                    </p>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={handleFileChange}
                    />
                    {fileError && (
                        <p className="text-red-500 mt-2">{fileError}</p>
                    )}
                </div>
            </div>
            <Button
                variant={"next"}
                onClick={handleNextClick}
                disabled={!isFileValid || isLoading}
            >
                Next <p className=" rounded"></p>
            </Button>
        </div>
    );
};

export default FileUpload;
