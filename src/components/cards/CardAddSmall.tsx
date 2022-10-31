// components
import Typography from '../ui/Typography';

// types, interfaces & enums
import { TypographyVariantEnum } from '../../enums';

// images & icons
import { PlusCircleIcon } from '@heroicons/react/solid';

type CardAddSmallProps = {
    onClick: () => void;
};
const CardAddSmall = ({ onClick }: CardAddSmallProps) => {
    return (
        <>
            <button onClick={() => onClick()}>
                <PlusCircleIcon className="h-10 w-10 text-primary-main" />
            </button>
            <Typography
                variant={TypographyVariantEnum.P}
                color="text-primary-main"
                fontSize="text-xs"
                fontWeight="font-bold"
            >
                Créer un projet
            </Typography>
        </>
    );
};

export default CardAddSmall;
