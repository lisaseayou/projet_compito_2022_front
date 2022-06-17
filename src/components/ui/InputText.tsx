import React from 'react';
type InputTextProps = {
    placeholder: string;
    type: string;
    id: string;
    icon: any;
    className?: string;
};
const InputText = ({
    type,
    id,
    className,
    placeholder,
    icon,
}: InputTextProps) => {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute inset-y-0 inline-flex items-center left-4">
                {icon}
            </span>

            <input
                type={type}
                id={id}
                className="w-full p-4 py-7 px-6 pl-12 font-display not-italic font-bold text-xl leading-none capitalize text-gray-900 bg-gray-light lightborder-gray-200 rounded-2lg shadow-sm focus-visible:outline-0"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputText;
