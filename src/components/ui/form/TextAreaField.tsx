import React, { ChangeEvent, ClipboardEvent, ReactNode } from 'react';

type TextAreaFieldProps = {
    placeholder: string;
    name: string;
    id: string;
    row?: number;
    icon: ReactNode;
    className?: string;
    value: string;
    handleChange: (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => void;
    handlePaste?: (e: ClipboardEvent<HTMLInputElement>) => boolean;
    handleCopy?: (e: ClipboardEvent<HTMLInputElement>) => boolean;
};

const TextAreaField = ({
    name,
    id,
    className,
    row = 8,
    placeholder,
    icon,
    value,
    handleChange,
}: TextAreaFieldProps) => {
    return (
        <div className={`relative ${className}`}>
            <span className="absolute top-4 inline-flex items-center left-4 text-primary-main">
                {icon}
            </span>

            <textarea
                id={id}
                name={name}
                rows={row}
                className={`w-full p-4 pl-12 font-display not-italic text-primary-main font-normal text-base leading-none normal-case bg-gray-light lightborder-gray-200 rounded-2lg shadow-sm focus-visible:outline-0 placeholder:italic placeholder:opacity-50 placeholder:text-base placeholder:text-primary-main`}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextAreaField;
