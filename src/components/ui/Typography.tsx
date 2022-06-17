import { ReactNode } from 'react';

type TypographyProps = {
    children: ReactNode;
    variant: string;
    style?: object;
    className?: string;
    leading?: string;
    fontSize?: string;
    color?: string;
};

const Typography = ({
    variant,
    style,
    className,
    leading,
    fontSize,
    color,
    children,
}: TypographyProps) => {
    if (variant === 'h2') {
        return (
            <h2
                className={`not-italic font-extrabold ${
                    leading ?? 'leading-none'
                } ${fontSize ?? 'text-6xl'} capitalize ${
                    color ?? 'text-white'
                } ${className}`}
                style={style}
            >
                {children}
            </h2>
        );
    }

    if (variant === 'h5') {
        return (
            <h5
                className={`not-italic font-normal leading-${
                    leading ?? 'leading-none'
                } ${fontSize ?? 'text-2xl'} capitalize ${
                    color ?? 'text-white'
                } ${className}`}
                style={style}
            >
                {children}
            </h5>
        );
    }

    if (variant === 'p') {
        return (
            <p
                className={`not-italic font-normal leading-${
                    leading ?? 'leading-none'
                } ${fontSize ?? 'text-base'} ${
                    color ?? 'text-white'
                } ${className}`}
                style={style}
            >
                {children}
            </p>
        );
    }

    return <></>;
};

export default Typography;
