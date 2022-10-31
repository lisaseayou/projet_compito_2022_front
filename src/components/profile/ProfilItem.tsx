// types, interfaces && enums
import { ReactNode } from 'react';
import { TextTransformEnum, TypographyVariantEnum } from '../../enums';

// components
import Typography from '../ui/Typography';

type ProfilItemProps = {
    children: ReactNode;
};
const ProfilItem = ({ children }: ProfilItemProps) => {
    return (
        <Typography
            variant={TypographyVariantEnum?.P}
            color="text-primary-main"
            fontSize={'text-lg sm:text-1xl'}
            textTransform={TextTransformEnum.NORMAL}
            className="mb-4 sm:mb-0 text-center w-full sm:w-auto"
        >
            {children}
        </Typography>
    );
};

export default ProfilItem;
