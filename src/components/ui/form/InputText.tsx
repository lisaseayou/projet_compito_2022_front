import React, { ChangeEvent } from 'react';
import { TextFieldVariantEnum } from '../../../enums';

type InputTextProps = {
    label: string;
    placeholder?: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    variant?: TextFieldVariantEnum;
    labelClassName?: string;
};

const InputText = ({
    label,
    placeholder,
    name,
    value,
    onChange,
    variant = TextFieldVariantEnum.NO_LABEL,
    labelClassName,
}: InputTextProps) => {
    if (variant === TextFieldVariantEnum.NO_LABEL) {
        return (
            <>
                <label className="sr-only" htmlFor={name}>
                    {label}
                </label>

                <input
                    className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                    placeholder={placeholder ?? ''}
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </>
        );
    }

    return (
        <>
            <label className={labelClassName} htmlFor={name}>
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
