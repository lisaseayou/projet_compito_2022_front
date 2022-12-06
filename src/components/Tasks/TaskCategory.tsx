import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextLineHeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Icon from '../ui/Icons/Icon';
import Typography from '../ui/Typography';

type TaskCategoryProps = {
    title: string;
    tasksLengthByStatus: number;
    showBtn: boolean;
    onClick: () => void;
};

const TaskCategory = ({
    title,
    tasksLengthByStatus,
    showBtn,
    onClick,
}: TaskCategoryProps) => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-1">
                    <Typography
                        variant={TypographyVariantEnum?.H5}
                        color="text-primary-main"
                        fontSize={FontSizeEnum.BASE}
                        fontWeight={FontWeightEnum.NORMAL}
                        textTransform={TextTransformEnum.NORMAL}
                    >
                        {title}
                    </Typography>

                    <div className="px-1 py-0.5 bg-primary-secondary rounded h-fit">
                        <Typography
                            variant={TypographyVariantEnum?.P}
                            color="text-primary-main"
                            className=""
                            fontSize={FontSizeEnum.XS}
                            fontWeight={FontWeightEnum.BOLD}
                            leading={TextLineHeightEnum.LINE_HEIGHT_3}
                        >
                            {tasksLengthByStatus}
                        </Typography>
                    </div>
                </div>

                {showBtn && (
                    <button
                        className="flex items-center rounded-b-md p-1 hover:bg-primary-ultraLight"
                        onClick={onClick}
                    >
                        <Icon
                            variant={IconEnum.PLUS}
                            opacity={OpacityEnum.OPACITY_100}
                            className="w-4 h-4 hover:cursor-pointer"
                        />
                    </button>
                )}
            </div>
            <hr className="mt-2 mb-4" />
        </>
    );
};

export default TaskCategory;
