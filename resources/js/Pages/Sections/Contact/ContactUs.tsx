import React from "react";
import Heading from "@/Components/heading/Heading";
import people from "../../../../assets/womenphone.svg";

export default function ContactUs() {
    return (
        <div className="mb-10">
            <Heading
                title="Contacteer Ons"
                text1={
                    <>
                        Bij <span className="font-bold">SwiftLetters</span> staan we altijd klaar om je te helpen. Of je nu vragen hebt over onze diensten, hulp nodig hebt bij het plaatsen van een bestelling, of gewoon meer wilt weten over wat we doen, we horen graag van je.
                    </>
                }
                text2=""
                showButton={false}
                buttonText=""
                secondaryButtonText=""
            />
            <div className="flex justify-center mt-10">
                <img
                    src={people}
                    alt="people"
                    className="w-[350px] h-[300px]"
                />
            </div>
        </div>
    );
}
