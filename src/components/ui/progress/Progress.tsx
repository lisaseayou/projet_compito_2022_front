import {
    FontSizeEnum,
    FontWeightEnum,
    ProgressTypeEnum,
    TypographyVariantEnum,
} from '../../../enums';
import { ITask } from '../../../types/Task';
import { getPlural } from '../../../utils';
import Typography from '../Typography';

type ProgressProps = {
    items: ITask[];
    type: ProgressTypeEnum;
};

const Progress = ({ items, type }: ProgressProps) => {
    const getAdvancement = () => {
        if (items.length > 0) {
            const tasksDone = items.filter((task) => task?.status === 'done');
            return ((tasksDone.length / items.length) * 100).toFixed(2) || 0;
        }

        return 0;
    };

    return (
        <div className="w-full mb-4 mt-4">
            <Typography
                variant={TypographyVariantEnum?.P}
                color="text-primary-main"
                fontSize={FontSizeEnum.XS}
                fontWeight={FontWeightEnum.MEDIUM}
            >
                {items.length} {getPlural(items, type)}
                {items.length > 0 && ` | ${getAdvancement()} %`}
            </Typography>

            <div className="mt-2 overflow-hidden bg-gray-200 rounded-full">
                <div
                    className="h-1 bg-primary-main rounded-full"
                    style={{ width: `${getAdvancement()}%` }}
                />
            </div>
        </div>
    );
};

export default Progress;
