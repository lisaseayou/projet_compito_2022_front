// hooks
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

// components
import Avatar from '../ui/avatar/Avatar';
import AvatarEmpty from '../ui/avatar/AvatarEmpty';
import Icon from '../ui/Icons/Icon';
import Typography from '../ui/Typography';
import ActionBase from '../actions/ActionBase';
import ModalDelete from '../modals/ModalDelete';
import Chip from '../ui/chip/Chip';

// utils & helpers
import { firstLetterUpperCase, truncate } from '../../utils';
import { ToastError, ToastSuccess } from '../../utils/Toast';

// graphql
import {
    GET_ALL_PROJECTS,
    GET_ALL_TASKS,
    GET_LAST_PROJECTS_UPDATE_BY_USER,
    GET_PROJECT,
    GET_PROJECT_BY_USER,
} from '../../graphql/query';
import { DELETE_TASK } from '../../graphql/mutation';

// types, interfaces & enums
import { IUser } from '../../types/User';
import { ITask, IDeleteTask } from '../../types/Task';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';

// images & icons
import { DotsVerticalIcon } from '@heroicons/react/solid';
import avatar1 from '../../assets/avatar/avatar-1.jpg';
import avatar2 from '../../assets/avatar/avatar-2.jpg';

type TaskCardProps = {
    task: ITask;
    modalUpdateOrDeleteID: string;
    setModalUpdateOrDeleteID: (value: string) => void;
    expandInfoTask: boolean;
    projectId: string;
};

const TaskCard = ({
    task,
    modalUpdateOrDeleteID,
    setModalUpdateOrDeleteID,
    expandInfoTask,
    projectId
}: TaskCardProps) => {
    const [showAction, setShowAction] = useState<boolean>(false);
    const [showDeleteTask, setShowDeleteTask] = useState<boolean>(false);

    const [deleteTask] = useMutation<IDeleteTask>(DELETE_TASK, {
        onCompleted: () => {
            ToastSuccess('La tache a bien été supprimé ! 😊');
            setShowDeleteTask(false);
        },
        onError: () => {
            ToastError("La tache n'a pas pu être supprimé :(");
        },
        refetchQueries: [
            GET_PROJECT,
            GET_ALL_PROJECTS,
            GET_ALL_TASKS,
            GET_PROJECT_BY_USER,
            GET_LAST_PROJECTS_UPDATE_BY_USER,
        ],
    });

    const handleDelete = () =>
        deleteTask({
            variables: {
                deleteTaskId: task.id,
            },
        });

    return (
        <div className="relative block col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 p-4 mb-4 bg-primary-ultraLight w-full border border-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="justify-between flex flex-col">
                        <div className="flex justify-between">
                            <Link to="/">
                                <Typography
                                    variant={TypographyVariantEnum?.H5}
                                    color="text-primary-main"
                                    fontSize={FontSizeEnum.BASE}
                                    fontWeight={FontWeightEnum.BOLD}
                                    textTransform={TextTransformEnum.NORMAL}
                                >
                                    {firstLetterUpperCase(task.name)}
                                </Typography>
                            </Link>

                            <div className="relative flex-shrink-0 ml-3 block">
                                <button
                                    onClick={() => {
                                        setShowAction(!showAction);
                                        setModalUpdateOrDeleteID(
                                            task.id !== modalUpdateOrDeleteID
                                                ? task.id
                                                : ''
                                        );
                                    }}
                                >
                                    <DotsVerticalIcon className="h-5 w-5 text-primary-main" />
                                </button>

                                {showAction &&
                                    modalUpdateOrDeleteID === task.id  && (
                                        <ActionBase
                                            className="top-8 right-2"
                                            dataId={task.id}
                                            setShowAction={setShowAction}
                                            setShowDeleteData={
                                                setShowDeleteTask
                                            }
                                            task={task}
                                            projectId={projectId}
                                        />
                                    )}
                            </div>
                        </div>

                        <div className="mt-2">
                            <Typography
                                variant={TypographyVariantEnum?.P}
                                color="text-primary-main"
                                className="mb-0"
                                fontSize={FontSizeEnum.XS}
                            >
                                {truncate(task.description, 15)}
                            </Typography>
                        </div>

                        {expandInfoTask && (
                            <div className="flex gap-2 mt-2 mb-4">
                                {['front end', 'backend', 'webdesign'].map(
                                    (tag, i) => (
                                        <Chip key={i} label={tag} />
                                    )
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {expandInfoTask && (
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <Avatar src={avatar1} alt="user one" />

                                {task?.users?.map(
                                    (user: IUser, index: number) =>
                                        index > 0 &&
                                        index < 3 && (
                                            <Avatar
                                                key={index}
                                                src={avatar2}
                                                alt="user two"
                                                className="-ml-3"
                                            />
                                        )
                                )}

                                {task?.users?.length > 3 && (
                                    <AvatarEmpty
                                        more={task?.users?.length - 3}
                                        className="-ml-3"
                                    />
                                )}
                            </div>
                            <div className="flex gap-4">
                                <div className="flex">
                                    <Icon
                                        variant={IconEnum.EYE_OUTLINE}
                                        opacity={OpacityEnum.OPACITY_100}
                                        className="w-5 h-5"
                                    />
                                    <Typography
                                        variant={TypographyVariantEnum?.P}
                                        color="text-primary-main"
                                        className="ml-1"
                                        fontSize={FontSizeEnum.XS}
                                    >
                                        {task.view}
                                    </Typography>
                                </div>

                                <div className="flex">
                                    <Icon
                                        variant={IconEnum.CHAT_ALT_OUTLINE}
                                        opacity={OpacityEnum.OPACITY_100}
                                        className="w-5 h-5"
                                    />
                                    <Typography
                                        variant={TypographyVariantEnum?.P}
                                        color="text-primary-main"
                                        className="ml-1"
                                        fontSize={FontSizeEnum.XS}
                                    >
                                        15
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <ModalDelete
                show={showDeleteTask}
                setShow={setShowDeleteTask}
                title="Supprimer une tache"
                description="Êtes vous sûr de vouloir supprimer cet tache ? Cette action est irréversible."
                onDelete={handleDelete}
            />
        </div>
    );
};
export default TaskCard;
