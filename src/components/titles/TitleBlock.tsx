import Typography, { variantEnum } from '../ui/Typography';

type TitleBlockProps = {
    title: string;
    icon: any;
};

const TitleBlock = ({ title, icon }: TitleBlockProps) => {
    return (
        <div className="flex flex-col mt-8">
            <div className="flex items-center">
                {icon}
                <Typography variant={variantEnum?.H3} color="text-primary-main">
                    {title}
                </Typography>
            </div>
        </div>
    );
};

export default TitleBlock;
