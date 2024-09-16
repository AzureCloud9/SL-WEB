import React from "react";
import { Button } from "@/shadcn/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../shadcn/ui/card";

interface StepCardProps {
    stepNumber: number;
    title: string;
    content: string;
    buttonText: string;
    onButtonClick?: () => void;
    showButton?: boolean;
}

export default function StepCard({
    stepNumber,
    title,
    content,
    buttonText,
    onButtonClick,
    showButton,
}: StepCardProps) {
    return (
        <div>
            <Card className=" lg:hidden">
                <CardHeader>
                    <CardTitle>
                        {stepNumber}. {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{content}</p>
                </CardContent>
                <CardFooter>
                    {showButton && (
                        <a href="/brief-sturen">
                            <Button variant="main" onClick={onButtonClick}>
                                {buttonText}
                            </Button>
                        </a>
                    )}
                </CardFooter>
            </Card>
            <div className=" hidden lg:flex  w-[550px] rounded-3xl">
                <div className=" mr-5">
                    <div className=" lg:w-16 lg:h-16 lg:bg-white lg:flex lg:justify-center lg:items-center lg:rounded-full">
                        <div className=" lg:w-12 lg:h-12 lg:flex lg:justify-center lg:items-center lg:rounded-full lg:bg-swift_black text-white">
                            {stepNumber}.
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className=" text-2xl font-roboto font-bold">
                            {title}
                        </h4>
                        <p className=" text-xl font-light">{content}</p>
                    </div>
                    <div className=" flex">
                        {showButton && (
                            <a href="/brief-sturen">
                                <Button
                                    variant="secondary"
                                    onClick={onButtonClick}
                                    className=" mt-10"
                                >
                                    {buttonText}
                                </Button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
