import React, { ChangeEvent } from 'react';

type InputTextProps = {
    label: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputText = ({
    label,
    placeholder,
    name,
    value,
    onChange,
}: InputTextProps) => {
    return (
        <>
            <label className="sr-only" htmlFor={name}>
                {label}
            </label>

            <input
                className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                placeholder={placeholder}
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default InputText;
