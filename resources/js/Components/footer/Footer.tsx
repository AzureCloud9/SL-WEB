import { Button } from "@/shadcn/ui/button";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-swift_black p-10">
            <div className="container mx-auto lg:flex lg:justify-between lg:items-start lg:gap-20">
                {/* SwiftLetters Section */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-10 lg:mb-0 lg:border-r-2 lg:pr-10 border-b-2 pb-10 lg:border-b-0 border-gray-600">
                    <h2 className="font-sen font-bold text-2xl text-white mb-3">
                        SwiftLetters
                    </h2>
                    <p className="font-sen text-gray-300 mb-5 text-center lg:text-left">
                        Verzenden Zonder Gedoe.
                    </p>
                    <a href="/brief-sturen">
                        <Button variant="third" className="mt-3">
                            Start Nu
                        </Button>
                    </a>
                </div>

                {/* Verkennen Section */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-10 lg:mb-0">
                    <h3 className="font-bold font-roboto text-xl text-white mb-4">
                        Verkennen
                    </h3>
                    <a
                        href="/"
                        className="mb-2 text-gray-400 hover:text-white transition"
                    >
                        Home
                    </a>
                    <a
                        href="/brief-sturen"
                        className="mb-2 text-gray-400 hover:text-white transition"
                    >
                        Brief Verzenden
                    </a>
                    <a
                        href="/over-ons"
                        className="mb-2 text-gray-400 hover:text-white transition"
                    >
                        Over Ons
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-400 hover:text-white transition"
                    >
                        Contact
                    </a>
                </div>

                {/* Ondersteuning Section */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/4 mb-10 lg:mb-0">
                    <h3 className="font-bold font-roboto text-xl text-white mb-4">
                        Ondersteuning
                    </h3>
                    <a
                        href="/privacy-verklaring"
                        className="mb-2 text-gray-400 hover:text-white transition"
                    >
                        Privacy Verklaring
                    </a>
                    <a
                        href="/brief-verzenden"
                        className="mb-2 text-gray-400 hover:text-white transition"
                    >
                        Brief Verzenden
                    </a>
                    <a
                        href="/algemene-voorwaarden"
                        className="text-gray-400 hover:text-white transition"
                    >
                        Algemene Voorwaarden
                    </a>
                </div>

                {/* Contactinformatie Section */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/4">
                    <h3 className="font-bold font-roboto text-xl text-white mb-4">
                        Contactinformatie
                    </h3>
                    <p className="font-sen text-gray-300 mb-2">
                        Email: support@swiftletters.nl
                    </p>
                    <p className="font-sen text-gray-300 mb-2">
                        KVK-nummer: 91932068
                    </p>
                    <p className="font-sen text-gray-300">
                        BTW-nummer: NL004926352B53
                    </p>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} PixelFlux. All rights
                reserved.
            </div>
        </footer>
    );
}
