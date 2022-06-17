import { ReactNode } from 'react';

export enum ButtonTypeEnum {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

type ButtonProps = {
    children: ReactNode;
    variant: string;
    type?: ButtonTypeEnum;
    onClick?: () => void;
};

const Button = ({ children, variant, type, onClick }: ButtonProps) => {
    if (variant === 'outline') {
        return (
            <button
                type={type ?? ButtonTypeEnum.BUTTON}
                className="inline-block py-3.5 px-16 leading-7 text-xl font-extrabold not-italic text-white uppercase border-2 border-solid border-white rounded-full hover:bg-primary-dark hover:text-white active:bg-primary-dark focus:outline-none focus:ring"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    if (variant === 'primary') {
        return (
            <button
                type={type ?? ButtonTypeEnum.BUTTON}
                className="inline-block py-3.5 px-16 leading-7 text-xl font-extrabold not-italic bg-primary-main text-white uppercase border-2 border-solid border-primary-main rounded-full hover:bg-primary-dark hover:border-primary-dark hover:text-white active:bg-primary-dark focus:outline-none focus:ring"
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    return <></>;
};

export default Button;
