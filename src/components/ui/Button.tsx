import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    variant: string;
};

const Button = ({ children, variant }: ButtonProps) => {
    if (variant === 'outline') {
        return (
            <button className="inline-block py-3.5 px-16 leading-7 text-xl font-extrabold not-italic text-white uppercase border-2 border-solid border-white rounded-full hover:bg-primary-dark hover:text-white active:bg-primary-dark focus:outline-none focus:ring">
                {children}
            </button>
        );
    }

    if (variant === 'primary') {
        return (
            <button className="inline-block py-3.5 px-16 leading-7 text-xl font-extrabold not-italic bg-primary-main text-white uppercase border-2 border-solid border-primary-main rounded-full hover:bg-primary-dark hover:border-primary-dark hover:text-white active:bg-primary-dark focus:outline-none focus:ring">
                {children}
            </button>
        );
    }

    return <></>;
};

export default Button;
