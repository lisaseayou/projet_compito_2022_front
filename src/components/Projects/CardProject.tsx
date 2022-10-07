import { DotsVerticalIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    ProgressTypeEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import { IProject } from '../../types/Project';
import { IUser } from '../../types/User';
import { FirstLetterUpperCase, formatDate, truncate } from '../../utils';
import Avatar from '../ui/avatar/Avatar';
import AvatarEmpty from '../ui/avatar/AvatarEmpty';
import Icon from '../ui/Icons/Icon';
import Progress from '../ui/progress/Progress';
import Typography from '../ui/Typography';
import avatar1 from '../../assets/avatar/avatar-1.jpg';
import avatar2 from '../../assets/avatar/avatar-2.jpg';
import { useState } from 'react';
import ActionBase from '../actions/ActionBase';
import ModalDelete from '../modals/ModalDelete';
import { useMutation } from '@apollo/client';
import { ToastError, ToastSuccess } from '../../utils/Toast';
import { GET_ALL_PROJECTS } from '../../graphql/query';
import { DELETE_PROJECT } from '../../graphql/mutation';

type CardProjectProps = {
    project: IProject;
};

const CardProject = ({ project }: CardProjectProps) => {
    const [showAction, setShowAction] = useState<boolean>(false);
    const [showDeleteProject, setShowDeleteProject] = useState<boolean>(false);

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        onCompleted: () => {
            ToastSuccess('Votre projet a bien été supprimé ! 😊');
        },
        onError: () => {
            ToastError("Votre projet n'a pas pu être supprimé :(");
        },
        refetchQueries: [GET_ALL_PROJECTS],
    });

    const handleDelete = () =>
        deleteProject({
            variables: {
                deleteProjectId: project.id,
            },
        });

    return (
        <div className="relative block col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 p-5 w-full h-96 border border-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="justify-between flex">
                        <div>
                            <Link to={`/project-details/${project.id}`}>
                                <Typography
                                    variant={TypographyVariantEnum?.H5}
                                    color="text-primary-main -mt-1"
                                    className="mb-0"
                                    fontSize={FontSizeEnum.XL}
                                    fontWeight={FontWeightEnum.BOLD}
                                    textTransform={TextTransformEnum.NORMAL}
                                >
                                    {FirstLetterUpperCase(project.name)}
                                </Typography>
                            </Link>
                        </div>

                        <div className="relative flex-shrink-0 ml-3 block">
                            <button onClick={() => setShowAction(!showAction)}>
                                <DotsVerticalIcon className="h-5 w-5 text-primary-main" />
                            </button>

                            {showAction && (
                                <ActionBase
                                    className="top-8 right-2"
                                    dataId={project.id}
                                    setShowAction={setShowAction}
                                    setShowDeleteData={setShowDeleteProject}
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex items-center mt-4">
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
                    </div>

                    <div className="mt-4 sm:pr-8">
                        <Typography
                            variant={TypographyVariantEnum?.P}
                            color="text-primary-main"
                            className="mb-0"
                            fontSize={FontSizeEnum.SM}
                        >
                            {truncate(project.description, 25)}
                        </Typography>
                    </div>
                </div>

                <div className="flex flex-col">
                    <Progress
                        items={project?.tasks}
                        type={ProgressTypeEnum.TASK}
                    />

                    <div className="flex justify-between items-center">
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
                    </div>
                </div>
            </div>

            <ModalDelete
                show={showDeleteProject}
                setShow={setShowDeleteProject}
                title="Supprimer le projet"
                description="Êtes vous sûr de vouloir supprimer ce projet ? Cette action est irréversible."
                onDelete={handleDelete}
            />
        </div>
    );
};
export default CardProject;
