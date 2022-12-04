import {
    FontWeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../../enums';
import Typography from '../Typography';

type ChipProps = {
    label: string;
};

const Chip = ({ label }: ChipProps) => {
    return (
        <div className="bg-orange-primary rounded px-2 py-0">
            <Typography
                variant={TypographyVariantEnum?.P}
                color="text-orange-dark"
                className="mb-0"
                fontSize="text-[10px]"
                fontWeight={FontWeightEnum.SEMIBOLD}
                textTransform={TextTransformEnum.UPPERCASE}
            >
                {label}
            </Typography>
        </div>
    );
};

export default Chip;
