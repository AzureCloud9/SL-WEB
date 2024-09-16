import { Button } from "@/shadcn/ui/button";
import React from "react";

export default function Footer() {
    return (
        <div className="bg-swift_black p-10">
            <div className="lg:flex lg:justify-center lg:items-center">
                <div className="lg:flex lg:gap-32 lg:w-[1150px]">
                    <div className="flex justify-center lg:justify-start lg:w-1/4">
                        <div className="flex flex-col items-center lg:items-start lg:justify-center w-full text-white mb-10 border-b-2 pb-9 lg:border-r-2 lg:pr-20 lg:border-b-0">
                            <h2 className="font-sen font-bold text-2xl mb-3">
                                SwiftLetters
                            </h2>
                            <p className="font-sen mb-5">
                                Verzenden Zonder Gedoe. Wij regelen de rest.
                            </p>
                            <a href="/brief-sturen">
                                <Button variant="third" className="mt-5">
                                    Start Nu
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-start justify-center mb-12 lg:mb-0 lg:w-1/4">
                        <p className="font-bold font-roboto text-xl text-white mb-4">
                            Verkennen
                        </p>
                        <a href="/" className="mb-1">
                            <p className="font-sen text-white">Home</p>
                        </a>
                        <a href="/brief-sturen" className="mb-1">
                            <p className="font-sen text-white">
                                Brief Verzenden
                            </p>
                        </a>
                        <a href="/over-ons" className="mb-1">
                            <p className="font-sen text-white">Over Ons</p>
                        </a>
                        <a href="/contact">
                            <p className="font-sen text-white">Contact</p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center lg:items-start justify-center mb-12 lg:mb-0 lg:w-1/4">
                        <p className="font-bold font-roboto text-xl text-white mb-4">
                            Ondersteuning
                        </p>
                        <a href="/privacy-verklaring" className="mb-1">
                            <p className="font-sen text-white">
                                Privacy Verklaring
                            </p>
                        </a>
                        <a href="/brief-verzenden" className="mb-1">
                            <p className="font-sen text-white">
                                Brief Verzenden
                            </p>
                        </a>
                        <a href="/algemene-voorwaarden">
                            <p className="font-sen text-white">
                                Algemene Voorwaarden
                            </p>
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center lg:items-start lg:w-1/4">
                        <p className="font-bold font-roboto text-xl text-white mb-4">
                            Contactinformatie
                        </p>
                        <p className="font-sen text-white">
                            Email: support@swiftletters.nl
                        </p>
                        <p className="font-sen text-white">
                            KVK-nummer: 91932068
                        </p>
                        <p className="font-sen text-white">
                            BTW-nummer: NL004926352B53
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
