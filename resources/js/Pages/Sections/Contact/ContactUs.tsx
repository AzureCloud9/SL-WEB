import React from "react";
import Heading from "@/Components/heading/Heading";
import people from "../../../../assets/womenphone.svg";

export default function ContactUs() {
    return (
        <div className="mb-10 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-20 lg:max-w-6xl lg:w-full lg: lg:mx-auto lg:justify-between">
                    {/* Left Text Section */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-start text-center lg:text-left">
                        <Heading
                            title="Contacteer Ons"
                            text1={
                                <>
                                    Bij{" "}
                                    <span className="font-bold">
                                        SwiftLetters
                                    </span>{" "}
                                    staan we altijd klaar om je te helpen. Of je
                                    nu vragen hebt over onze diensten, hulp
                                    nodig hebt bij het plaatsen van een
                                    bestelling, of gewoon meer wilt weten over
                                    wat we doen, we horen graag van je.
                                </>
                            }
                            text2=""
                            showButton={false}
                            buttonText=""
                            secondaryButtonText=""
                        />
                    </div>

                    {/* Right Image Section */}
                    <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                        <img
                            src={people}
                            alt="Contact Us Illustration"
                            className="w-[350px] h-[300px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
