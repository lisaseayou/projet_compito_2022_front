import { ReactNode } from 'react';
import {
    FontSizeEnum,
    FontWeightEnum,
    TextLineHeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';

type TypographyProps = {
    children: ReactNode;
    variant: TypographyVariantEnum | string;
    style?: object;
    className?: string;
    leading?: TextLineHeightEnum | string;
    fontSize?: string | FontSizeEnum | string[];
    color?: string;
    textTransform?: TextTransformEnum | string;
    fontWeight?: FontWeightEnum | string;
};

const Typography = ({
    variant,
    style,
    className,
    leading,
    fontSize,
    color,
    textTransform,
    fontWeight,
    children,
}: TypographyProps) => {
    if (variant === TypographyVariantEnum.H1) {
        return (
            <h1
                className={`not-italic ${FontWeightEnum.EXTRABOLD} ${
                    leading ?? TextLineHeightEnum.NONE
                } ${Array.isArray(fontSize) ? fontSize.join(' ') : fontSize} ${
                    textTransform ?? TextTransformEnum.NORMAL
                } ${color ?? 'text-white'} ${className}`}
                style={style}
            >
                {children}
            </h1>
        );
    }

    if (variant === TypographyVariantEnum.H2) {
        return (
            <h2
                className={`not-italic ${FontWeightEnum.EXTRABOLD} ${
                    leading ?? TextLineHeightEnum.NONE
                } ${Array.isArray(fontSize) ? fontSize.join(' ') : fontSize} ${
                    textTransform ?? TextTransformEnum.NORMAL
                } ${color ?? 'text-white'} ${className}`}
                style={style}
            >
                {children}
            </h2>
        );
    }

    if (variant === TypographyVariantEnum.H3) {
        return (
            <h3
                className={`not-italic ${
                    fontWeight ?? FontWeightEnum.NORMAL
                } leading-${leading ?? TextLineHeightEnum.NONE} ${
                    Array.isArray(fontSize) ? fontSize.join(' ') : fontSize
                } ${textTransform ?? TextTransformEnum.NORMAL} ${
                    color ?? 'text-white'
                } ${className}`}
                style={style}
            >
                {children}
            </h3>
        );
    }

    if (variant === TypographyVariantEnum.H4) {
        return (
            <h4
                className={`not-italic ${
                    fontWeight ?? FontWeightEnum.NORMAL
                } leading-${leading ?? TextLineHeightEnum.NONE} ${
                    Array.isArray(fontSize) ? fontSize.join(' ') : fontSize
                } ${textTransform ?? TextTransformEnum.NORMAL} ${
                    color ?? 'text-white'
                } ${className}`}
                style={style}
            >
                {children}
            </h4>
        );
    }

    if (variant === TypographyVariantEnum.H5) {
        return (
            <h5
                className={`not-italic ${
                    fontWeight ?? FontWeightEnum.NORMAL
                } leading-${leading ?? TextLineHeightEnum.NONE} ${
                    Array.isArray(fontSize) ? fontSize.join(' ') : fontSize
                } ${textTransform ?? TextTransformEnum.NORMAL} ${
                    color ?? 'text-white'
                } ${className}`}
                style={style}
            >
                {children}
            </h5>
        );
    }

    if (variant === TypographyVariantEnum.H6) {
        return (
            <h6
                className={`not-italic ${FontWeightEnum.NORMAL} leading-${
                    leading ?? TextLineHeightEnum.NONE
                } ${Array.isArray(fontSize) ? fontSize.join(' ') : fontSize} ${
                    textTransform ?? TextTransformEnum.NORMAL
                } ${color ?? 'text-white'} ${className}`}
                style={style}
            >
                {children}
            </h6>
        );
    }

    if (variant === TypographyVariantEnum.P) {
        return (
            <p
                className={`not-italic ${fontWeight ?? FontWeightEnum.NORMAL} ${
                    leading ?? TextLineHeightEnum.NORMAL
                } ${Array.isArray(fontSize) ? fontSize.join(' ') : fontSize} ${
                    textTransform ?? TextTransformEnum.NORMAL
                } ${color ?? 'text-white'} ${className}`}
                style={style}
            >
                {children}
            </p>
        );
    }

    if (variant === TypographyVariantEnum.BUTTON) {
        return (
            <h6
                className={`not-italic ${
                    fontWeight ?? FontWeightEnum.NORMAL
                } leading-${leading ?? TextLineHeightEnum.NONE} ${
                    Array.isArray(fontSize) ? fontSize.join(' ') : fontSize
                } ${color ?? 'text-white'} ${className}`}
                style={style}
            >
                {children}
            </h6>
        );
    }

    return <></>;
};

export default Typography;
