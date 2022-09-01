import { ReactNode } from 'react';

export enum variantEnum {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    P = 'p',
}

type TypographyProps = {
    children: ReactNode;
    variant: variantEnum;
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
    if (variant === variantEnum?.H1) {
        return (
            <h1
                className={`not-italic font-extrabold ${
                    leading ?? 'leading-none'
                } ${fontSize ?? 'text-6xl'} capitalize ${
                    color ?? 'text-white'
                } ${className}`}
                style={style}
            >
                {children}
            </h1>
        );
    }

    if (variant === variantEnum?.H2) {
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

    if (variant === variantEnum?.H5) {
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

    if (variant === variantEnum?.P) {
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
