import Heading from "@/Components/heading/Heading";
import React from "react";
import girl from "../../../../assets/women_paper_holding.svg";
import arrowdwn from "../../../../assets/arrowdown.svg";

export default function Hero() {
    const scrollToHowItWorks = () => {
        const section = document.getElementById("howitworks");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="mb-10 mt-5 lg:mt-10 flex flex-col items-center px-4">
            {/* Main Content Wrapper */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-[1150px] w-full">
                {/* Text Section */}
                <div className="flex flex-col justify-center lg:justify-start w-full lg:w-1/2">
                    <Heading
                        title="Stuur Brieven Snel en Gemakkelijk Online"
                        text1="Bij SwiftLetters bieden we een moderne oplossing voor het verzenden van brieven."
                        text2="Upload eenvoudig uw PDF- of Word-bestanden en wij regelen de rest. Verstuur uw brieven snel en efficiënt vanuit uw huis of kantoor."
                        showButton={true}
                        buttonText="Verstuur Nu"
                        secondaryButtonText="Meer Informatie"
                    />
                </div>

                {/* Image Section */}
                <div className="flex justify-center lg:w-1/2 lg:justify-end mt-6 lg:mt-0">
                    <img
                        src={girl}
                        alt="girlhero"
                        className="w-full max-w-xs lg:max-w-none lg:w-[500px] lg:h-auto"
                    />
                </div>
            </div>

            {/* Scroll Down Section */}
            <div className="flex flex-col mt-10 lg:mt-20 items-center w-full">
                <p className="text-lg lg:text-xl text-center text-gray-700">
                    Hoe het werkt?
                </p>
                <div
                    className="animate-bounce mt-6 rounded-full border-2 border-gray-300 bg-swift_black w-12 h-12 lg:h-14 lg:w-14 flex justify-center items-center cursor-pointer"
                    onClick={scrollToHowItWorks}
                >
                    <img src={arrowdwn} alt="arrowdwn" />
                </div>
            </div>
        </div>
    );
}
