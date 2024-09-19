import React from "react";

interface ProgressStepsProps {
    currentStep: number;
}

export default function ProgressSteps({ currentStep }: ProgressStepsProps) {
    const steps = [
        { number: 1, label: "Pdf/Word\nUpload" },
        { number: 2, label: "Ontvanger/\nVerzender" },
        { number: 3, label: "Besteloverzicht" },
        { number: 4, label: "Betaling" },
    ];

    return (
        <div className="flex lg:flex-col justify-center items-center space-x-4 lg:space-x-0 lg:space-y-8 md:space-x-8">
            {steps.map((step) => (
                <div
                    key={step.number}
                    className="flex flex-col items-center justify-start"
                >
                    <div
                        className={`w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-full ${
                            currentStep === step.number
                                ? "bg-swift_blue"
                                : "border-2 md:border-4 border-white"
                        }`}
                    >
                        <span
                            className={`font-bold text-sm md:text-base ${
                                currentStep === step.number
                                    ? "text-white"
                                    : "text-white"
                            }`}
                        >
                            {step.number}
                        </span>
                    </div>
                    <p className="text-white font-sen font-bold mt-2 text-xs md:text-sm text-center">
                        {step.label.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    );
}
