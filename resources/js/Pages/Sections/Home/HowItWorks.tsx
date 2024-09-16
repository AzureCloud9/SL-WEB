import React from "react";
import StepCard from "../../../Components/cards/StepCard";
import SectionLayout from "../../../Layouts/SectionLayout";
import phone from "../../../../assets/howitworksphone.svg";

export default function HowItWorks() {
    return (
        <SectionLayout backgroundColor="bg-swift_black" fullWidth>
            <div id="howitworks" className="text-white py-10 -mt-8">
                <div className="container mx-auto px-4 lg:w-[1150px]">
                    <h2 className="text-3xl mb-8 font-roboto font-bold lg:text-center lg:mb-24">
                        Stap-voor-Stap Uitleg
                    </h2>
                    <div className="lg:flex lg:justify-between lg:gap-2 lg:items-center  lg:w-[1150px]">
                        <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                            <img
                                src={phone}
                                alt="phone"
                                className="lg:w-full"
                            />
                        </div>
                        <div className="space-y-8 lg:h-[480px] lg:flex lg:flex-col lg:justify-between lg:w-1/2">
                            <StepCard
                                stepNumber={1}
                                title="Upload Uw Documenten"
                                content="Kies uw PDF- of Word-bestand en upload deze naar ons platform. Onze gebruiksvriendelijke interface maakt het proces eenvoudig en snel. Upload Nu!"
                                buttonText="Begin met Verzenden"
                                showButton={false}
                            />
                            <StepCard
                                stepNumber={2}
                                title="Vul de Gegevens In"
                                content="Voer de ontvangerinformatie in en personaliseer uw brief indien nodig. Alles wat u nodig heeft, op één plek."
                                buttonText="Ga Verder"
                                showButton={false}
                            />
                            <StepCard
                                stepNumber={3}
                                title="Verzend Uw Brief"
                                content="Wij doen de rest! Uw brief wordt snel en veilig verzonden, zonder gedoe."
                                buttonText="Verstuur Nu"
                                showButton={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
}
