// components
import Typography from '../Typography';

// utils & helpers
import { getPlural } from '../../../utils';

// types, interfaces & enums
import { ITask } from '../../../types/Task';
import {
    FontSizeEnum,
    FontWeightEnum,
    ProgressTypeEnum,
    StatusEnum,
    TypographyVariantEnum,
} from '../../../enums';

type ProgressProps = {
    items: ITask[];
    taskWording?: ProgressTypeEnum | string;
    taskDoneWording?: ProgressTypeEnum | string;
    showTaskDone?: boolean;
};

const Progress = ({
    items,
    showTaskDone = false,
    taskWording = ProgressTypeEnum.TASK,
    taskDoneWording = ProgressTypeEnum.TASK_DONE,
}: ProgressProps) => {
    const getAdvancement = () => {
        if (items.length > 0) {
            const tasksDone = items.filter(
                (task) => task?.status === StatusEnum.FINISH
            );
            return ((tasksDone.length / items.length) * 100).toFixed(0) || 0;
        }

        return 0;
    };

    const getWordingTasksNumber = () => {
        let wording = `${items.length.toString()} ${getPlural(
            items,
            taskWording
        )}`;

        if (items.length > 0) {
            wording += ` | ${getAdvancement()} %`;
        }

        return wording;
    };

    const getWordingTasksDone = () => {
        const taskDone = () => {
            return items?.filter((e) => e.status === StatusEnum.FINISH);
        };

        if (items.length) {
            return `(${taskDone().length} ${getPlural(
                taskDone(),
                taskWording
            )} ${getPlural(taskDone(), taskDoneWording)})`;
        }
    };

    return (
        <div className="w-full mb-4 mt-4">
            <Typography
                variant={TypographyVariantEnum?.P}
                color="text-primary-main"
                fontSize={FontSizeEnum.XS}
                fontWeight={FontWeightEnum.MEDIUM}
            >
                {getWordingTasksNumber()}
                {showTaskDone ? (
                    <span className="block">{getWordingTasksDone()}</span>
                ) : null}
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
