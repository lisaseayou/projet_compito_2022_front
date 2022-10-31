import {
    AlertVariantEnum,
    FontSizeEnum,
    TypographyVariantEnum,
} from '../../enums';
import Typography from './Typography';

interface AlertProps {
    variant: AlertVariantEnum;
    children: string;
    containerClassName?: string;
}

const Alert = ({ variant, children, containerClassName }: AlertProps) => {
    if (variant === AlertVariantEnum.INPUT_ERROR) {
        return (
            <div
                className={`py-1 px-2 mb-4 text-sm bg-danger-light rounded-md ${
                    containerClassName ?? ''
                }`}
            >
                <Typography
                    variant={TypographyVariantEnum?.P}
                    fontSize={FontSizeEnum.XS}
                    color="text-danger-main"
                    className="text-left"
                >
                    {children}
                </Typography>
            </div>
        );
    }

    if (variant === AlertVariantEnum.FORM_ERROR) {
        return (
            <div
                className={`py-4 px-4 mt-0 mb-4 mx-4 text-sm bg-danger-light rounded-md ${
                    containerClassName ?? ''
                }`}
            >
                <Typography
                    variant={TypographyVariantEnum?.P}
                    fontSize={FontSizeEnum.XS}
                    color="text-danger-main"
                    className="text-center"
                >
                    {children}
                </Typography>
            </div>
        );
    }

    return <></>;
};

export default Alert;
