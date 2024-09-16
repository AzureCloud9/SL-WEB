import React, { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./../../shadcn/ui/select";

export default function Language() {
    // State to hold the selected language
    const [selectedLanguage, setSelectedLanguage] = useState("dutch");

    return (
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-[130px]">
                <SelectValue>
                    {selectedLanguage === "dutch" ? "🇳🇱 Dutch" : "🇬🇧 English"}
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    <SelectItem value="dutch">🇳🇱 Dutch</SelectItem>
                    <SelectItem value="english">🇬🇧 English</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
