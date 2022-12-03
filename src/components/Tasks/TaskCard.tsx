// hooks
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

// components
import Avatar from '../ui/avatar/Avatar';
import AvatarEmpty from '../ui/avatar/AvatarEmpty';
import Icon from '../ui/Icons/Icon';
import Progress from '../ui/progress/Progress';
import Typography from '../ui/Typography';
import ActionBase from '../actions/ActionBase';
import ModalDelete from '../modals/ModalDelete';

// utils & helpers
import { firstLetterUpperCase, formatDate, truncate } from '../../utils';
import { ToastError, ToastSuccess } from '../../utils/Toast';

// graphql
import {
    GET_LAST_PROJECTS_UPDATE_BY_USER,
    GET_PROJECT_BY_USER,
} from '../../graphql/query';
import { DELETE_PROJECT } from '../../graphql/mutation';

// types, interfaces & enums
import { IDeleteProject, IProject } from '../../types/Project';
import { IUser } from '../../types/User';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    ProgressTypeEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';

// images & icons
import { DotsVerticalIcon } from '@heroicons/react/solid';
import avatar1 from '../../assets/avatar/avatar-1.jpg';
import avatar2 from '../../assets/avatar/avatar-2.jpg';
import { ITask } from '../../types/Task';

type TaskCardProps = {
    task: ITask;
    // modalUpdateOrDeleteID: string;
    // setModalUpdateOrDeleteID: (value: string) => void;
};

const TaskCard = ({ task }: TaskCardProps) => {
    // const [showAction, setShowAction] = useState<boolean>(false);
    // const [showDeleteProject, setShowDeleteProject] = useState<boolean>(false);

    // const [deleteProject] = useMutation<IDeleteProject>(DELETE_PROJECT, {
    //     onCompleted: () => {
    //         ToastSuccess('Votre projet a bien été supprimé ! 😊');
    //     },
    //     onError: () => {
    //         ToastError("Votre projet n'a pas pu être supprimé :(");
    //     },
    //     refetchQueries: [GET_PROJECT_BY_USER, GET_LAST_PROJECTS_UPDATE_BY_USER],
    // });

    // const handleDelete = () =>
    //     deleteProject({
    //         variables: {
    //             deleteProjectId: project.id,
    //         },
    //     });

    return (
        <div className="relative block col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 p-5 mb-4 bg-primary-ultraLight w-full border border-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="justify-between flex flex-col">
                        <div>
                            <Link to="/">
                                <Typography
                                    variant={TypographyVariantEnum?.H5}
                                    color="text-primary-main"
                                    fontSize={FontSizeEnum.BASE}
                                    fontWeight={FontWeightEnum.BOLD}
                                    textTransform={TextTransformEnum.NORMAL}
                                >
                                    {firstLetterUpperCase(task.subject)}
                                </Typography>
                            </Link>
                        </div>

                        <div className="mt-2">
                            <Typography
                                variant={TypographyVariantEnum?.P}
                                color="text-primary-main"
                                className="mb-0"
                                fontSize={FontSizeEnum.XS}
                            >
                                {truncate(
                                    'Jelly-o gummi bears apple pie gingerbread muffin danish brownie shortbread pie. Danish candy croissant pastry carrot cake. Candy canes muffin liquorice cookie candy cotton candy jelly-o. Candy carrot cake gingerbread donut icing soufflé fruitcake chocolate liquorice. Toffee chocolate cake shortbread bear claw tart lollipop jelly beans. Bonbon oat cake donut halvah soufflé tart cupcake wafer. Sweet roll chupa chups cake dessert toffee.',
                                    15
                                )}
                            </Typography>
                        </div>

                        <div></div>

                        {/* <div className="relative flex-shrink-0 ml-3 block">
                            <button
                                onClick={() => {
                                    setShowAction(!showAction);
                                    setModalUpdateOrDeleteID(
                                        project.id !== modalUpdateOrDeleteID
                                            ? project.id
                                            : ''
                                    );
                                }}
                            >
                                <DotsVerticalIcon className="h-5 w-5 text-primary-main" />
                            </button>

                            {showAction &&
                                modalUpdateOrDeleteID === project.id && (
                                    <ActionBase
                                        className="top-8 right-2"
                                        dataId={project.id}
                                        setShowAction={setShowAction}
                                        setShowDeleteData={setShowDeleteProject}
                                    />
                                )}
                        </div> */}
                    </div>

                    {/* <div className="flex items-center mt-4">
                        <Icon
                            variant={IconEnum.CLOCK_OUTLINE}
                            opacity={OpacityEnum.OPACITY_100}
                            className="w-5 h-5 text-primary-main"
                        />
                        <Typography
                            variant={TypographyVariantEnum?.P}
                            color="text-primary-light"
                            className="ml-2"
                            fontSize={FontSizeEnum.XS}
                        >
                            Mise à jour le{' '}
                            {formatDate(
                                project.createdAt,
                                'dd/MM/yyyy à hh:ss'
                            )}
                        </Typography>
                    </div> */}
                </div>

                <div className="flex flex-col">
                    {/* <Progress
                        items={project?.tasks}
                        type={ProgressTypeEnum.TASK}
                    /> */}

                    {/* <div className="flex justify-between items-center">
                        <div className="flex">
                            <Avatar src={avatar1} alt="user one" />

                            {project?.users?.map(
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

                            {project?.users?.length > 3 && (
                                <AvatarEmpty
                                    more={project?.users?.length - 3}
                                    className="-ml-3"
                                />
                            )}
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
                    </div> */}
                </div>
            </div>

            {/* <ModalDelete
                show={showDeleteProject}
                setShow={setShowDeleteProject}
                title="Supprimer le projet"
                description="Êtes vous sûr de vouloir supprimer ce projet ? Cette action est irréversible."
                onDelete={handleDelete}
            /> */}
        </div>
    );
};
export default TaskCard;
