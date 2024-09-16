import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Button } from "@/shadcn/ui/button";

interface SuccessProps {
    bestelnummer: string;
    delivery_option: string;
    recipient_name: string;
    recipient_address: string;
    recipient_postcode: string;
    recipient_city: string;
    recipient_country: string;
    user_price: string;
}

const baseUrl = "https://secure-thicket-74556-1cb1c0b6b14c.herokuapp.com/";

const Success: React.FC<SuccessProps> = ({
    bestelnummer,
    delivery_option,
    recipient_name,
    recipient_address,
    recipient_postcode,
    recipient_city,
    recipient_country,
    user_price,
}) => {
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 sm:px-6 lg:px-8">
                <div className="max-w-3xl w-full space-y-8 bg-white p-10 shadow-lg rounded-lg">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900">
                            Bestelling Voltooid!
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Bedankt voor uw betaling. Uw bestelnummer is:{" "}
                            <strong className="text-indigo-600">
                                {bestelnummer}
                            </strong>
                        </p>

                        {delivery_option === "Aangetekend" && (
                            <p className="mt-2 text-gray-600">
                                U ontvangt zo snel mogelijk een mail met u track
                                & trace code.
                            </p>
                        )}
                        <p className="mt-2 text-gray-600">
                            Als u vragen heeft over uw post, kunt u een e-mail
                            sturen naar{" "}
                            <a
                                href="mailto:info@swiftletters.nl"
                                className="text-indigo-600 underline"
                            >
                                info@swiftletters.nl
                            </a>
                            .
                        </p>
                    </div>
                    <div className="border-t border-gray-200 pt-8">
                        <h2 className="text-xl font-bold text-gray-900">
                            Bestellingsoverzicht
                        </h2>
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between py-2">
                                <span className="font-medium text-gray-600">
                                    Ontvanger:
                                </span>
                                <span className="text-gray-900">
                                    {recipient_name}
                                </span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-medium text-gray-600">
                                    Adres:
                                </span>
                                <span className="text-gray-900">
                                    {recipient_address}
                                </span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-medium text-gray-600">
                                    Postcode:
                                </span>
                                <span className="text-gray-900">
                                    {recipient_postcode}
                                </span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-medium text-gray-600">
                                    Plaats:
                                </span>
                                <span className="text-gray-900">
                                    {recipient_city}
                                </span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-medium text-gray-600">
                                    Land:
                                </span>
                                <span className="text-gray-900">
                                    {recipient_country}
                                </span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-medium text-gray-600">
                                    Bezorgoptie:
                                </span>
                                <span className="text-gray-900">
                                    {delivery_option}
                                </span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-medium text-gray-600">
                                    Prijs:
                                </span>
                                <span className="text-gray-900">
                                    €{user_price}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <a href="/">
                            <Button variant="next" size="default">
                                Terug naar Homepage
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Success;
