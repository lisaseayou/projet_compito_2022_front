import React, { ChangeEvent } from 'react';

type TextAreaProps = {
    label: string;
    row: number;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({
    label,
    row,
    placeholder,
    name,
    value,
    onChange,
}: TextAreaProps) => {
    return (
        <>
            <label className="sr-only" htmlFor={name}>
                {label}
            </label>

            <textarea
                className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                placeholder={placeholder}
                rows={row}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default TextArea;
