import { ReactNode } from 'react';
import { FontSizeEnum, TypographyVariantEnum } from '../../enums';
import Typography from '../ui/Typography';

type TitleBlockProps = {
    title: string;
    icon: ReactNode;
};

const TitleBlock = ({ title, icon }: TitleBlockProps) => {
    return (
        <div className="flex flex-col mt-8">
            <div className="flex items-center">
                {icon}
                <Typography
                    variant={TypographyVariantEnum?.H3}
                    color="text-primary-main"
                    fontSize={FontSizeEnum.XL}
                >
                    {title}
                </Typography>
            </div>
        </div>
    );
};

export default TitleBlock;
