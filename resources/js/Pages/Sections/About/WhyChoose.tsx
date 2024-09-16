import Heading from "@/Components/heading/Heading";
import childletter from "../../../../assets/child-letter.png";
import KeyFeatures from "@/Components/cards/KeyFeatures";

export default function WhyChoose() {
    return (
        <div className="py-10 bg-gray-50 ">
            {" "}
            {/* Adjust background if necessary */}
            <div className="container mx-auto px-4 max-w-6xl w-full">
                {/* Custom heading styling */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-3xl font-bold mb-4">
                        Waarom kiezen voor SwiftLetters
                    </h1>
                    <p className="text-lg text-gray-700">
                        Bij Swift Letters.nl streven we ernaar om de beste
                        service te bieden voor het versturen van jouw brieven en
                        documenten. Hier zijn drie redenen waarom je voor ons
                        zou moeten kiezen:
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-12">
                    {/* Left image section */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
                        <img
                            src={childletter}
                            alt="child-letter"
                            className="mx-auto w-[250px] h-[350px] lg:w-[300px] lg:h-[400px]" // Adjust size as per need
                        />
                    </div>

                    {/* Right KeyFeatures section */}
                    <div className="lg:w-1/2">
                        <KeyFeatures />
                    </div>
                </div>
            </div>
        </div>
    );
}
