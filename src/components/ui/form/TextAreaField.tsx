import React, { ClipboardEvent, ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { AlertVariantEnum } from '../../../enums';
import Alert from '../Alert';

type TextAreaFieldProps = {
    control?: any;
    validation?: any;
    name: string;
    id: string;
    placeholder: string;
    row?: number;
    icon: ReactNode;
    className?: string;
    containerClassName?: string;
    handlePaste?: (e: ClipboardEvent<HTMLInputElement>) => boolean;
    handleCopy?: (e: ClipboardEvent<HTMLInputElement>) => boolean;
    defaultValue?: string;
    error?: any;
};

const TextAreaField = ({
    control,
    validation,
    name,
    id,
    className,
    row = 8,
    placeholder,
    icon,
    containerClassName,
    error,
    defaultValue,
}: TextAreaFieldProps) => {
    return (
        <div className={containerClassName}>
            <Controller
                control={control}
                name={name}
                rules={validation}
                render={({ field: { onChange, value } }) => (
                    <div className={'relative'}>
                        <span className="absolute top-4 inline-flex items-center left-4 text-primary-main">
                            {icon}
                        </span>

                        <textarea
                            id={id}
                            name={name}
                            rows={row}
                            className={`w-full p-4 pl-12 font-display not-italic text-primary-main font-normal text-base leading-none normal-case bg-gray-light lightborder-gray-200 rounded-2lg shadow-sm focus-visible:outline-0 placeholder:italic placeholder:opacity-50 placeholder:text-base placeholder:text-primary-main outline-none`}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onChange}
                        />
                    </div>
                )}
            />

            {error && (
                <Alert
                    variant={AlertVariantEnum.INPUT_ERROR}
                    containerClassName="mt-2 mb-2"
                >
                    {error?.message as string}
                </Alert>
            )}
        </div>
    );
};

export default TextAreaField;
