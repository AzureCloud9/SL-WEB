import Heading from "@/Components/heading/Heading";
import React from "react";
import people from "../../../../assets/overonspeople.svg";

export default function Overons() {
    return (
        <div className="mb-10 px-4 lg:px-0">
            <div className="flex justify-center items-center mt-10">
                <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:space-x-12">
                    {/* Left text section */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <Heading
                            title="Over Ons"
                            text1="Bij SwiftLetters geloven we in het combineren van traditie met moderne technologie. Ons doel is om het versturen van fysieke post eenvoudiger, sneller en toegankelijker te maken voor iedereen. Of het nu gaat om persoonlijke brieven, officiële documenten of zakelijke correspondentie, wij zorgen ervoor dat jouw post veilig en snel op de plaats van bestemming aankomt."
                            text2=""
                            showButton={false}
                            buttonText=""
                            secondaryButtonText=""
                        />
                    </div>

                    {/* Right image section */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src={people}
                            alt="people"
                            className="w-full lg:max-w-xl h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
