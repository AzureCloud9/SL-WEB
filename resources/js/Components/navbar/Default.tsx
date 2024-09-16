import React from "react";
import logo from "../../../assets/logodesktop.svg";
import Language from "../Input/Language";

interface DefaultProps {
    activeLink: string;
    homeClick: () => void;
    aboutClick: () => void;
    sendClick: () => void;
    contactClick: () => void;
}

export default function Default({
    activeLink,
    homeClick,
    aboutClick,
    sendClick,
    contactClick,
}: DefaultProps) {
    return (
        <div className="h-24  justify-center items-center px-6 hidden lg:flex">
            <div className="w-[1150px] flex justify-between items-center ">
                <a href="/" className="font-sen text-xl">
                    <img src={logo} alt="logo" className="" />
                </a>
                <div className="w-[650px] flex justify-between items-center">
                    <a
                        href="/"
                        className={`font-sen text-xl ${
                            activeLink === "home" ? "font-bold" : ""
                        }`}
                        onClick={homeClick}
                    >
                        Home
                    </a>
                    <a
                        href="/over-ons"
                        className={`font-sen text-xl ${
                            activeLink === "about" ? "font-bold" : ""
                        }`}
                        onClick={aboutClick}
                    >
                        Over ons
                    </a>
                    <a
                        href="/contact"
                        className={`font-sen text-xl ${
                            activeLink === "contact" ? "font-bold" : ""
                        }`}
                        onClick={contactClick}
                    >
                        Contact
                    </a>
                    <Language />
                    <a
                        href="/brief-sturen"
                        className={`font-sen text-xl w-44 h-10 flex justify-center items-center bg-swift_black hover:bg-swift_black_hover text-white rounded-3xl `}
                        onClick={sendClick}
                    >
                        Brief verzenden
                    </a>
                </div>
            </div>
        </div>
    );
}
