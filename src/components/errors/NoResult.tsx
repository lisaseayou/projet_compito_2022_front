// components
import Button from '../ui/Buttons/Button';
import Typography from '../ui/Typography';

// types, interfaces & enums
import {
    TypographyVariantEnum,
    TextTransformEnum,
    FontWeightEnum,
    ButtonTypeEnum,
    ButtonVariantEnum,
} from '../../enums';

interface NoResultProps {
    image: string;
    text: string;
    typoVariant?: TypographyVariantEnum;
    textTransform?: TextTransformEnum;
    fontSize?: string;
    fontWeight?: FontWeightEnum;
    btnLabel: string;
    btnOnclick: () => void;
}

const NoResult = ({
    image,
    typoVariant,
    textTransform,
    fontSize,
    fontWeight,
    text,
    btnLabel,
    btnOnclick,
}: NoResultProps) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <img src={image} className="max-w-lg" alt="no result" />
            </div>

            <div className="flex flex-col justify-center items-center">
                <Typography
                    variant={typoVariant ?? TypographyVariantEnum.H2}
                    color="text-primary-main"
                    fontSize={fontSize ?? 'text-3xl sm:text-4xl'}
                    textTransform={textTransform ?? TextTransformEnum.NORMAL}
                    fontWeight={fontWeight ?? FontWeightEnum.NORMAL}
                    className=" text-center w-full sm:w-auto"
                >
                    {text}
                </Typography>

                <Button
                    type={ButtonTypeEnum?.SUBMIT}
                    variant={ButtonVariantEnum.PRIMARY}
                    className="mt-10"
                    onClick={btnOnclick}
                >
                    {btnLabel}
                </Button>
            </div>
        </>
    );
};

export default NoResult;
