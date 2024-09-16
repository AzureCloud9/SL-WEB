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
            <div className="flex flex-col lg:flex-row lg:justify-center lg:w-[1150px] lg:items-center w-full">
                <div className="flex flex-col justify-center  lg:flex-row lg:justify-center lg:items-center w-full">
                    <Heading
                        title="Stuur Brieven Snel en Gemakkelijk Online"
                        text1="Bij SwiftLetters bieden we een moderne oplossing voor het verzenden van brieven."
                        text2="Upload eenvoudig uw PDF- of Word-bestanden en wij regelen de rest. Verstuur uw brieven snel en efficiënt vanuit uw huis of kantoor."
                        showButton={true}
                        buttonText="Verstuur Nu"
                        secondaryButtonText="Meer Informatie"
                    />
                   <div className="justify-center flex items-center">
                    <img
                        src={girl}
                        alt="girlhero"
                        className="mt-6 w-full max-w-xs lg:mt-0 lg:w-[600px] lg:h-[400px] lg:ml-8"
                    />
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-11 items-center lg:mt-20 lg:mb-5 w-full">
                <p className="text-lg lg:text-xl text-center">Hoe het werkt?</p>
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
