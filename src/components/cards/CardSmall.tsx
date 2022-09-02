import { DotsVerticalIcon, ColorSwatchIcon } from '@heroicons/react/solid';
import Typography, { variantEnum } from '../ui/Typography';

type CardSmallProps = {
    title: string;
};

const CardSmall = ({ title }: CardSmallProps) => {
    return (
        <div className="flex flex-col items-start bg-blue-300 rounded p-6">
            <div className="flex justify-between w-full">
                <ColorSwatchIcon className="h-8 w-8 text-primary-main" />
                <DotsVerticalIcon className="h-4 w-4 text-primary-main" />
            </div>

            <Typography
                variant={variantEnum?.H5}
                color="text-primary-main"
                fontSize="text-1xl"
                fontWeight="font-bold"
                className="w-full"
            >
                {title}
            </Typography>

            <div className="w-full mt-2">
                <Typography
                    variant={variantEnum?.P}
                    color="text-primary-main"
                    fontSize="text-xs"
                    fontWeight="font-medium"
                >
                    10 tasks | 46 %
                </Typography>

                <div className="mt-2 overflow-hidden bg-gray-200 rounded-full">
                    <div className="w-2/3 h-1 bg-blue-500 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default CardSmall;
