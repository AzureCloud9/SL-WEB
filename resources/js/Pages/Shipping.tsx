import React, { useState, useEffect } from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import SectionLayout from "@/Layouts/SectionLayout";
import FileUpload from "@/Pages/Sections/BriefSturen/FileUpload";
import ProgressSteps from "@/Components/steps/ProgressSteps";
import RecipientInfo from "@/Pages/Sections/BriefSturen/RecipientInfo";
import OrderSummary from "@/Pages/Sections/BriefSturen/OrderSummary";
import axios from "axios";
import { Head } from "@inertiajs/react";

export default function Shipping() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [bestelnummer, setBestelnummer] = useState<string | null>(null);
    const [sessionDetails, setSessionDetails] = useState<any>({});
    const [componentKey, setComponentKey] = useState<number>(Date.now());

    const nextStep = () => {
        setCurrentStep((prev) => prev + 1);
        setComponentKey(Date.now());
    };

    const previousStep = () => {
        setCurrentStep((prev) => prev - 1);
        setComponentKey(Date.now());
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentStep]);

    const handleFileUploadBestelnummer = (details: any) => {
        setSessionDetails(details);
        setBestelnummer(details.fileUpload.bestelnummer); // Assuming this is how bestelnummer is retrieved
        nextStep();
    };

    const handlePay = async () => {
        try {
            const response = await axios.post("/create-payment", {
                bestelnummer,
            });
            window.location.href = response.data.checkout_url; // Redirect to Mollie checkout page
        } catch (err) {
            console.error("Failed to initiate payment", err);
        }
    };

    return (
        <DefaultLayout>
            <Head title="Brief Sturen" />
            
            {/* Mobile View */}
            <div className="lg:hidden">
                <SectionLayout backgroundColor="bg-swift_black" fullWidth>
                    <ProgressSteps currentStep={currentStep} />
                </SectionLayout>
            </div>

            {/* Desktop View */}
            <div className="lg:flex justify-center lg:my-16 ">
                <div className="bg-swift_black w-[300px] lg:flex justify-center hidden sticky top-16">
                    <ProgressSteps currentStep={currentStep} />
                </div>
                
                <div className="lg:bg-white lg:w-[850px] p-8 lg:rounded-lg lg:shadow-lg">
                    <div className="mt-10 lg:mt-0">
                        {currentStep === 1 && (
                            <FileUpload
                                key={componentKey}
                                onNext={handleFileUploadBestelnummer}
                            />
                        )}
                        {currentStep === 2 && (
                            <RecipientInfo
                                key={componentKey}
                                onNext={nextStep}
                                onBack={previousStep}
                                sessionDetails={sessionDetails}
                            />
                        )}
                        {currentStep === 3 && (
                            <OrderSummary
                                key={componentKey}
                                onBack={previousStep}
                                onPay={handlePay}
                                sessionDetails={sessionDetails}
                            />
                        )}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
