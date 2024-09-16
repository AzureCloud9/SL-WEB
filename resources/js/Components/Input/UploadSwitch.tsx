import React from 'react';
import * as Switch from '@radix-ui/react-switch';

interface UploadSwitchProps {
    onChange: (checked: boolean) => void;
    checked: boolean;
    disabled: boolean;
    label: string;
}

const UploadSwitch: React.FC<UploadSwitchProps> = ({ onChange, checked, disabled, label }) => (
    <div className="flex items-center">
        <Switch.Root
            className={`relative w-10 h-6 rounded-full transition-colors duration-200 ${
                checked ? "bg-swift_black" : "bg-gray-300"
            }`}
            id="upload-switch"
            checked={checked}
            onCheckedChange={onChange}
            disabled={disabled}
        >
            <Switch.Thumb
                className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                    checked ? "translate-x-5" : "translate-x-0"
                }`}
            />
        </Switch.Root>
        <label className="ml-2 text-sm font-medium text-gray-700" htmlFor="upload-switch">
            {label}
        </label>
    </div>
);

export default UploadSwitch;
