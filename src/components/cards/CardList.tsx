import { ReactNode } from 'react';
import { TypographyVariantEnum } from '../../enums';
import Typography from '../ui/Typography';

type CardListProps = {
    title: string;
    icon: ReactNode;
    children: ReactNode;
};
const CardList = ({ title, icon, children }: CardListProps) => {
    return (
        <div className="flex justify-start bg-white border-b border-primary-main border-opacity-40 py-5">
            <div className="flex justify-center items-center h-8 w-8 mr-2 bg-primary-main">
                {icon}
            </div>

            <div className="flex justify-between items-center w-full">
                <div className="flex">
                    <Typography
                        variant={TypographyVariantEnum.H5}
                        color="text-primary-main"
                        fontSize="text-1xl"
                        fontWeight="font-semi-bold"
                        className="w-full"
                    >
                        {title}
                    </Typography>
                </div>
                {children}
            </div>
        </div>
    );
};

export default CardList;
