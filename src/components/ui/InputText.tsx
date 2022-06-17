import React, { ChangeEvent } from 'react';
type InputTextProps = {
    placeholder: string;
    type: string;
    name: string;
    id: string;
    icon: any;
    className?: string;
    value: any;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
};
const InputText = ({
    type,
    name,
    id,
    className,
    placeholder,
    icon,
    value,
    handleChange,
}: InputTextProps) => {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute inset-y-0 inline-flex items-center left-4">
                {icon}
            </span>

            <input
                type={type}
                id={id}
                name={name}
                className="w-full p-4 py-7 px-6 pl-12 font-display not-italic font-bold text-xl leading-none capitalize text-gray-900 bg-gray-light lightborder-gray-200 rounded-2lg shadow-sm focus-visible:outline-0"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputText;
