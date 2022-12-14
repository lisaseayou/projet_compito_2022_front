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
<div className="bg-orange-primary rounded px-2 py-0.5">
    {label}
</div>
    );
};

export default Chip;
