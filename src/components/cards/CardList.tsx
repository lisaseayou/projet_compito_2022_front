// React
import { ReactNode } from 'react';

// components
import Typography from '../ui/Typography';

// types, interfaces & enums
import { ITask } from '../../types/Task';
import { TypographyVariantEnum } from '../../enums';

type CardListProps = {
    task: ITask;
    icon: ReactNode;
    children: ReactNode;
};
const CardList = ({ task, icon, children }: CardListProps) => {
    return (
        <div className="flex justify-start bg-white border-b border-primary-main border-opacity-40 py-5">
            <div className="flex justify-center items-center h-12 w-12 mr-2 bg-primary-main">
                {icon} 
            </div>

            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                    <Typography
                        variant={TypographyVariantEnum.H5}
                        color="text-primary-main"
                        fontSize="text-xl"
                        fontWeight="font-semi-bold"
                        className="w-full"
                    >
                        {task.name}
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum.H6}
                        color="text-primary-main"
                        fontSize="text-xs"
                        fontWeight="font-semi-bold"
                        className="w-full"
                    >
                        {task.project.name}
                    </Typography>
                </div>
                {children}
            </div>
        </div>
    );
};

export default CardList;
