import { Link } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/solid';
import Typography, { variantEnum } from '../ui/Typography';

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
                variant={variantEnum?.P}
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
