import { ChangeEvent, ClipboardEvent, ReactNode } from 'react';
import { Control, Controller, FieldError, FieldValues } from 'react-hook-form';
import { AlertVariantEnum } from '../../../enums';
import { FormValidation } from '../../../types';
import Alert from '../Alert';

type TextFieldProps = {
    control?: Control<FieldValues, string>;
    validation?: FormValidation;
    name: string;
    id: string;
    type: string;
    placeholder: string;
    icon: ReactNode;
    iconShow?: ReactNode;
    className?: string;
    containerClassName?: string;
    handlePaste?: (e: ClipboardEvent<HTMLInputElement>) => boolean;
    handleCopy?: (e: ClipboardEvent<HTMLInputElement>) => boolean;
    error?: FieldError;
    value?: string;
    defaultValue?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange?: () => void;
};

const TextField = ({
    control,
    validation,
    name,
    id,
    type,
    placeholder,
    icon,
    iconShow,
    className,
    containerClassName,
    error,
    handlePaste,
    handleCopy,
    defaultValue,
    value,
    handleChange,
}: TextFieldProps) => {
    const renderInput = (value: string, onChange: any) => {
        console.log(error);
        return (
            <div className={'relative'}>
                <span className="absolute inset-y-0 inline-flex items-center left-4 text-primary-main">
                    {icon}
                </span>

                <input
                    type={type}
                    id={id}
                    className={`w-full p-4 pl-12 ${
                        iconShow ? 'pr-12' : 'pr-4'
                    } font-display not-italic text-primary-main font-normal text-base leading-none normal-case bg-gray-light lightborder-gray-200 rounded-2lg shadow-sm focus-visible:outline-0 placeholder:italic placeholder:opacity-50 placeholder:text-base placeholder:text-primary-main outline-none ${className}`}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onChange}
                    onPaste={handlePaste}
                    onCopy={handleCopy}
                />

                {iconShow && (
                    <span className="absolute inset-y-0 right-3 w-auto inline-flex items-center text-primary-main">
                        {iconShow}
                    </span>
                )}
            </div>
        );
    };

    return (
        <div className={containerClassName}>
            {control ? (
                <Controller
                    control={control}
                    name={name}
                    rules={validation}
                    render={({ field: { onChange, value } }) =>
                        renderInput(value, onChange)
                    }
                />
            ) : (
                renderInput(value as string, handleChange)
            )}

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

export default TextField;
