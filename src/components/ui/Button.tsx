import { ReactNode } from 'react';
import { ButtonTypeEnum, ButtonVariantEnum } from '../../enums';

type ButtonProps = {
    children: ReactNode;
    variant: ButtonVariantEnum;
    className?: string;
    type?: ButtonTypeEnum;
    onClick?: () => void;
};

const Button = ({ children, variant, className, type, onClick }: ButtonProps) => {
    if (variant === ButtonVariantEnum.OUTLINE) {
        return (
            <button
                type={type ?? ButtonTypeEnum.BUTTON}
                className={`inline-block py-2 px-14 leading-7 text-base font-extrabold not-italic text-white border-2 border-solid border-white rounded-full hover:bg-primary-dark hover:text-white active:bg-primary-dark focus:outline-none focus:ring ${
                    className ?? ''
                }`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    if (variant === ButtonVariantEnum.PRIMARY) {
        return (
            <button
                type={type ?? ButtonTypeEnum.BUTTON}
                className={`inline-block py-2 px-14 leading-7 text-base font-extrabold not-italic bg-primary-main text-white border-2 border-solid border-primary-main rounded-full hover:bg-primary-dark hover:border-primary-dark hover:text-white active:bg-primary-dark focus:outline-none focus:ring ${
                    className ?? ''
                }`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    if (variant === ButtonVariantEnum.LIGHT) {
        return (
            <button
                type={type ?? ButtonTypeEnum.BUTTON}
                className={`inline-block py-1 px-6 leading-7 text-sm font-extrabold not-italic bg-primary-main text-white normal border-2 border-solid border-primary-main rounded-md hover:bg-primary-dark hover:border-primary-dark hover:text-white active:bg-primary-dark focus:outline-none focus:ring ${
                    className ?? ''
                }`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    if (variant === ButtonVariantEnum.FORM) {
        return (
            <button
                type={ButtonTypeEnum.SUBMIT}
                className={`block w-full px-5 py-3 text-sm font-medium text-white bg-primary-main rounded-lg ${
                    className ?? ''
                }`}
            >
                {children}
            </button>
        );
    }

    return <></>;
};

export default Button;
