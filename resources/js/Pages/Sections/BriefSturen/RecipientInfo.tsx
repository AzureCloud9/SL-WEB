import React, { useState, ChangeEvent, FormEvent, KeyboardEvent } from "react";
import axios from "axios";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";
import UploadSwitch from "@/Components/Input/UploadSwitch";
import ShippingOptions from "@/Components/cards/ShippingOptions";
import Heading from "@/Components/heading/Heading";
import { Switch } from "@/shadcn/ui/switch";
import SelectBTN from "@/Components/Input/SelectBTN"; // Adjust the path as needed

interface RecipientInfoProps {
    onNext: () => void;
    onBack: () => void;
    sessionDetails: {
        fileUpload: any;
        pageCount: number;
    };
}

interface FormValues {
    first_name: string;
    last_name: string;
    street_address: string;
    postal_code: string;
    city: string;
    country: string;
    sender_first_name: string;
    sender_last_name: string;
    email: string;
}

interface FormErrors {
    [key: string]: string;
}

const RecipientInfo: React.FC<RecipientInfoProps> = ({
    onNext,
    onBack,
    sessionDetails,
}) => {
    const [showSender, setShowSender] = useState(false);
    const [formValues, setFormValues] = useState<FormValues>({
        first_name: "",
        last_name: "",
        street_address: "",
        postal_code: "",
        city: "",
        country: "Netherlands", // Preselecting Netherlands
        sender_first_name: "",
        sender_last_name: "",
        email: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [selectedShippingOption, setSelectedShippingOption] = useState({
        name: "Regulier",
        description: "",
        basePrice: 1.6,
        price: 1.6,
    });

    const handleswitch = () => {
        if (selectedShippingOption.name !== "Aangetekend") {
            setShowSender((prevState) => !prevState);
        } else {
            setShowSender(true);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors: FormErrors = {};
        if (!formValues.first_name)
            newErrors.first_name = "Voornaam is verplicht";
        if (!formValues.last_name)
            newErrors.last_name = "Achternaam is verplicht";
        if (!formValues.street_address)
            newErrors.street_address = "Adres is verplicht";
        if (!formValues.postal_code)
            newErrors.postal_code = "Postcode is verplicht";
        if (!formValues.city) newErrors.city = "Stad is verplicht";
        if (!formValues.country) newErrors.country = "Land is verplicht";
        if (showSender) {
            if (!formValues.sender_first_name)
                newErrors.sender_first_name = "Voornaam is verplicht";
            if (!formValues.sender_last_name)
                newErrors.sender_last_name = "Achternaam is verplicht";
            if (!formValues.email) {
                newErrors.email = "Email is verplicht";
            } else if (!validateEmail(formValues.email)) {
                newErrors.email = "Voer een geldig emailadres in";
            }
        }
        return newErrors;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});

        try {
            const recipientResponse = await axios.post("/recipients", {
                recipient_name: `${formValues.first_name} ${formValues.last_name}`,
                recipient_address: formValues.street_address,
                recipient_postcode: formValues.postal_code,
                recipient_city: formValues.city,
                recipient_country: formValues.country,
                delivery_option: selectedShippingOption.name,
                user_price: selectedShippingOption.price,
            });

            console.log(
                "Recipient added successfully:",
                recipientResponse.data
            );

            if (showSender) {
                const senderResponse = await axios.post("/senders", {
                    sender_first_name: formValues.sender_first_name,
                    sender_last_name: formValues.sender_last_name,
                    email: formValues.email,
                });

                console.log("Sender added successfully:", senderResponse.data);
            }

            onNext();
        } catch (error) {
            console.error("There was an error submitting the form:", error);
        }
    };

    const handleShippingOptionChange = (option: {
        name: string;
        description: string;
        basePrice: number;
        price: number;
    }) => {
        setSelectedShippingOption(option);
        if (option.name === "Aangetekend") {
            setShowSender(true);
        } else if (
            showSender &&
            selectedShippingOption.name === "Aangetekend"
        ) {
            // Only turn off if it was previously on due to Aangetekend
            setShowSender(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-2xl bg-white shadow-lg lg:shadow-none rounded-lg p-6">
                <Heading
                    title="Voer Ontvanger In"
                    text1="Vul de onderstaande gegevens in om ervoor te zorgen dat uw brief correct wordt bezorgd. Zorg ervoor dat alle informatie nauwkeurig en volledig is."
                    text2=""
                    showButton={false}
                    buttonText=""
                    secondaryButtonText=""
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Voornaam Ontvanger
                            </label>
                            <Input
                                name="first_name"
                                placeholder="Voornaam"
                                value={formValues.first_name}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                            />
                            {errors.first_name && (
                                <p className="text-red-500">
                                    {errors.first_name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Achternaam Ontvanger
                            </label>
                            <Input
                                name="last_name"
                                placeholder="Achternaam"
                                value={formValues.last_name}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                            />
                            {errors.last_name && (
                                <p className="text-red-500">
                                    {errors.last_name}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Adres Ontvanger
                        </label>
                        <Input
                            name="street_address"
                            placeholder="Straatnaam en Huisnummer"
                            value={formValues.street_address}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                        />
                        {errors.street_address && (
                            <p className="text-red-500">
                                {errors.street_address}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Postcode Ontvanger
                        </label>
                        <Input
                            name="postal_code"
                            placeholder="1234 AB"
                            value={formValues.postal_code}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                        />
                        {errors.postal_code && (
                            <p className="text-red-500">{errors.postal_code}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Stad Ontvanger
                        </label>
                        <Input
                            name="city"
                            placeholder="Amsterdam"
                            value={formValues.city}
                            onChange={handleChange}
                            onKeyPress={handleKeyPress}
                        />
                        {errors.city && (
                            <p className="text-red-500">{errors.city}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Land Ontvanger
                        </label>
                        <SelectBTN
                            selectedCountry={formValues.country}
                            onCountryChange={(country) =>
                                setFormValues({ ...formValues, country })
                            }
                        />
                        {errors.country && (
                            <p className="text-red-500">{errors.country}</p>
                        )}
                    </div>

                    <ShippingOptions
                        onOptionChange={handleShippingOptionChange}
                        pageCount={sessionDetails.pageCount}
                    />

                    <h3 className="text-lg font-bold mb-2">
                        Afzender toevoegen (optioneel)
                    </h3>
                    <div>
                        <Switch
                            checked={showSender}
                            onCheckedChange={handleswitch}
                        />
                    </div>

                    {showSender && (
                        <>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Voornaam Afzender
                                    </label>
                                    <Input
                                        name="sender_first_name"
                                        placeholder="Voornaam"
                                        value={formValues.sender_first_name}
                                        onChange={handleChange}
                                        onKeyPress={handleKeyPress}
                                    />
                                    {errors.sender_first_name && (
                                        <p className="text-red-500">
                                            {errors.sender_first_name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Achternaam Afzender
                                    </label>
                                    <Input
                                        name="sender_last_name"
                                        placeholder="Achternaam"
                                        value={formValues.sender_last_name}
                                        onChange={handleChange}
                                        onKeyPress={handleKeyPress}
                                    />
                                    {errors.sender_last_name && (
                                        <p className="text-red-500">
                                            {errors.sender_last_name}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Afzender
                                </label>
                                <Input
                                    name="email"
                                    placeholder="emailadres"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </>
                    )}

                    <div className="flex justify-between mt-4">
                        <Button variant="back" onClick={onBack}>
                            Terug
                        </Button>
                        <Button variant="next" type="submit">
                            Volgende
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RecipientInfo;
