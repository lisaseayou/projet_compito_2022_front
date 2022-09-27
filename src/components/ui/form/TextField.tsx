import React, { ChangeEvent } from 'react';
type TextFieldProps = {
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
const TextField = ({
    type,
    name,
    id,
    className,
    placeholder,
    icon,
    value,
    handleChange,
}: TextFieldProps) => {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute inset-y-0 inline-flex items-center left-4 text-primary-main">
                {icon}
            </span>

            <input
                type={type}
                id={id}
                name={name}
                className="w-full p-4 pl-12 font-display not-italic text-primary-main font-normal text-lg leading-none normal-case bg-gray-light lightborder-gray-200 rounded-2lg shadow-sm focus-visible:outline-0 placeholder:italic placeholder:opacity-50 placeholder:text-base placeholder:text-primary-main"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextField;
