import { FontSizeEnum, TypographyVariantEnum } from '../../../enums';
import Typography from '../Typography';

type AvatarProps = {
    more: number;
    className?: string;
};

const AvatarEmpty = ({ more, className }: AvatarProps) => {
    return (
        <div
            className={`rounded-full bg-gray-200 border-3 border-white ${className}`}
        >
            <Typography
                variant={TypographyVariantEnum?.P}
                color="text-primary-main"
                className="flex justify-center items-center h-8 w-8 pr-1"
                fontSize={FontSizeEnum.SM}
            >
                +{more}
            </Typography>
        </div>
    );
};

export default AvatarEmpty;
