import React, { useState, useEffect } from "react";

interface ShippingOption {
    name: string;
    description: string;
    basePrice: number;
    additionalCostPerTwoPages: number;
    price: number;
}

interface ShippingOptionsProps {
    onOptionChange: (option: ShippingOption) => void;
    pageCount: number;
}

export default function ShippingOptions({
    onOptionChange,
    pageCount,
}: ShippingOptionsProps) {
    const calculatePrice = (
        basePrice: number,
        additionalCostPerTwoPages: number,
        pageCount: number
    ): number => {
        const additionalPages = Math.max(0, pageCount - 2);
        const additionalUnits = Math.ceil(additionalPages / 2);
        return basePrice + additionalUnits * additionalCostPerTwoPages;
    };

    const options: ShippingOption[] = [
        {
            name: "Regulier",
            description:
                "We printen je document, zorgen voor een envelop, frankeren en verzenden zonder Track & Trace. Verwachte levertijd: 3-5 werkdagen.",
            basePrice: 2.0,
            additionalCostPerTwoPages: 3.0,
            price: 0,
        },
        {
            name: "Spoed",
            description:
                "Je document wordt met spoed behandeld en verzonden met Track & Trace. Verwachte levertijd: 1-2 werkdagen.",
            basePrice: 3.2,
            additionalCostPerTwoPages: 5.5,
            price: 0,
        },
        {
            name: "Aangetekend",
            description:
                "Je document wordt aangetekend verzonden met Track & Trace en handtekening voor ontvangst. Verwachte levertijd: 2-3 werkdagen.",
            basePrice: 10.5,
            additionalCostPerTwoPages: 13.0,
            price: 0,
        },
    ];

    const [selectedOption, setSelectedOption] = useState<ShippingOption>(() => {
        const option = options[0];
        option.price = calculatePrice(
            option.basePrice,
            option.additionalCostPerTwoPages,
            pageCount
        );
        return option;
    });

    useEffect(() => {
        setSelectedOption((prevOption) => {
            const newPrice = calculatePrice(
                prevOption.basePrice,
                prevOption.additionalCostPerTwoPages,
                pageCount
            );
            return { ...prevOption, price: newPrice };
        });
    }, [pageCount]);

    useEffect(() => {
        onOptionChange(selectedOption); // Ensure the initial option is sent to the parent
    }, [selectedOption, onOptionChange]);

    const handleOptionClick = (optionName: string) => {
        const selected = options.find((opt) => opt.name === optionName);
        if (selected) {
            const newPrice = calculatePrice(
                selected.basePrice,
                selected.additionalCostPerTwoPages,
                pageCount
            );
            setSelectedOption({ ...selected, price: newPrice });
            onOptionChange({ ...selected, price: newPrice }); // Call the callback with the selected option details
        }
    };

    return (
        <div className="w-full max-w-screen mx-auto bg-swift_black p-6 rounded-lg shadow-md">
            <div className="flex justify-around mb-4">
                {options.map((option) => (
                    <div
                        key={option.name}
                        className={`px-4 py-2 cursor-pointer rounded-md transition-all duration-300 ${
                            selectedOption.name === option.name
                                ? "bg-white text-black font-bold font-roboto shadow-md transform scale-105"
                                : "bg-primary-light text-white hover:bg-primary-dark hover:text-white"
                        }`}
                        onClick={() => handleOptionClick(option.name)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
            <div className="bg-primary-dark text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold font-roboto">
                    {selectedOption.name} brief
                </h3>
                <p className="mt-2 font-sen">{selectedOption.description}</p>
                <p className="mt-4 font-bold font-sen">
                    Prijs: €{selectedOption.price.toFixed(2)}
                </p>
            </div>
        </div>
    );
}
