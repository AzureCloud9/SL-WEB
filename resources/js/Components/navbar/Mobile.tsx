import React from "react";
import logo from "../../../assets/logo.png";
import hamburger from "../../../assets/hamburger.png";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/shadcn/ui/sheet";

interface mobileProps {
    contactClick: () => void;
    aboutClick: () => void;
    sendClick: () => void;
    homeClick: () => void;
    activeLink: string;
}

export default function Mobile({
    contactClick,
    aboutClick,
    sendClick,
    homeClick,
    activeLink,
}: mobileProps) {
    return (
        <div className="lg:hidden flex justify-center h-16 ">
            <div className="w-full flex items-center justify-between mx-6 ">
                <div>
                    <a href="/">
                        <img src={logo} alt="logo" className=" " />
                    </a>
                </div>
                <Sheet>
                    <SheetTrigger>
                        <img
                            src={hamburger}
                            alt="burger"
                            className=" w-8 h-8"
                        />{" "}
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader></SheetHeader>
                        <nav className="mt-4">
                            <ul className="space-y-4">
                                <li
                                    className={`pl-5 border-l-[1px] border-black ${activeLink === "home" ? "underline" : ""} ${activeLink === "home" ? "border-l-[2px]" : "border-l-[1px]"}`}
                                >
                                    <a
                                        href="/"
                                        className="text-black"
                                        onClick={homeClick}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li
                                    className={`pl-5 border-l-[1px] border-black ${activeLink === "send" ? "underline" : ""} ${activeLink === "send" ? "border-l-[2px]" : "border-l-[1px]"}`}
                                >
                                    <a
                                        href="/brief-sturen"
                                        className="text-black"
                                        onClick={sendClick}
                                    >
                                        Brief Verzenden
                                    </a>
                                </li>
                                <li
                                    className={`pl-5 border-l-[1px] border-black ${activeLink === "about" ? "underline" : ""} ${activeLink === "about" ? "border-l-[2px]" : "border-l-[1px]"}`}
                                >
                                    <a
                                        href="/over-ons"
                                        className="text-black"
                                        onClick={aboutClick}
                                    >
                                        Over Ons
                                    </a>
                                </li>
                                <li
                                    className={`pl-5 border-l-[1px] border-black ${activeLink === "contact" ? "underline " : ""} ${activeLink === "contact" ? "border-l-[2px]" : "border-l-[1px]"}`}
                                >
                                    <a
                                        href="/contact"
                                        className="text-black"
                                        onClick={contactClick}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
