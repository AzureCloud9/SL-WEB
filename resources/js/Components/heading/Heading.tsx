import React from "react";
import { Button } from "@/shadcn/ui/button";

interface HeadingProps {
    title: string;
    text1: string | JSX.Element;
    text2?: string;
    showButton: boolean;
    buttonText: string;
    secondaryButtonText: string;
}

export default function Heading({
    title,
    text1,
    text2,
    showButton,
    buttonText,
    secondaryButtonText,
}: HeadingProps) {
    return (
        <div className="">
            <div className="mb-5">
                <h1 className="font-roboto font-bold text-4xl mt-5 lg:text-5xl lg:w-[480px]">
                    {title}
                </h1>
                <p className="font-sen mt-5 lg:w-[480px] lg:text-xl ">
                    {text1}
                </p>
                <p className="font-sen mt-3 lg:text-xl text-swift_secondary ">
                    {text2}
                </p>
            </div>

            {showButton && (
                <div className=" lg:w-[480px] flex justify-between  ">
                    <a href="/brief-sturen">
                        <Button variant="main" className="">
                            {buttonText}
                        </Button>
                    </a>
                    <a href="/over-ons">
                        <Button variant="second">{secondaryButtonText}</Button>
                    </a>
                </div>
            )}
        </div>
    );
}
