import Heading from "@/Components/heading/Heading";
import React from "react";
import people from "../../../../assets/overonspeople.svg";

export default function Overons() {
    return (
        <div className=" mb-10">
            <Heading
                title="Over Ons"
                text1="Bij SwiftLetters geloven we in het combineren van traditie met moderne technologie. Ons doel is om het versturen van fysieke post eenvoudiger, sneller en toegankelijker te maken voor iedereen. Of het nu gaat om persoonlijke brieven, officiële documenten of zakelijke correspondentie, wij zorgen ervoor dat jouw post veilig en snel op de plaats van bestemming aankomt."
                text2=""
                showButton={false}
                buttonText=""
                secondaryButtonText=""
            />
            <div className=" flex justify-center mt-10">
                <img src={people} alt="people" />
            </div>
        </div>
    );
}
