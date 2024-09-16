import React from "react";
import money from "../../../assets/money.png";
import shield from "../../../assets/shield.png";
import clock from "../../../assets/clock.png";

const features = [
    {
        icon: clock,
        title: "Gemakkelijk en Snel",
        description: "Ons platform is ontworpen voor gebruiksgemak. Upload je document, voer de gegevens in en kies je verzendoptie. Binnen enkele minuten is je brief klaar om verzonden te worden."
    },
    {
        icon: shield,
        title: "Betrouwbare Bezorging",
        description: "We werken samen met gerenommeerde postdiensten zoals Deutsche Post AG om ervoor te zorgen dat je post veilig en op tijd aankomt. Je kunt vertrouwen op onze service voor zowel binnenlandse als internationale zendingen."
    },
    {
        icon: money,
        title: "Transparante Prijzen",
        description: "Bij ons geen verborgen kosten. We bieden duidelijke en betaalbare tarieven voor al onze diensten. Zo weet je altijd precies waar je aan toe bent."
    }
];

export default function KeyFeatures() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="space-y-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="bg-swift_black w-12 h-12 rounded-full flex justify-center items-center ">
                                <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
