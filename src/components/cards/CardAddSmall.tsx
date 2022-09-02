import { Link } from 'react-router-dom';
import { PlusCircleIcon } from '@heroicons/react/solid';
import Typography, { variantEnum } from '../ui/Typography';

const CardAddSmall = () => {
    return (
        <>
            <Link to="/">
                <PlusCircleIcon className="h-10 w-10 text-primary-main" />
            </Link>
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
