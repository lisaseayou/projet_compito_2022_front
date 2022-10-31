// hooks
import { useState } from 'react';
import { useMutation } from '@apollo/client';

// components
import Typography from '../ui/Typography';
import Progress from '../ui/progress/Progress';
import ActionBase from '../actions/ActionBase';
import ModalDelete from '../modals/ModalDelete';

// utils & helpers
import { ToastSuccess, ToastError } from '../../utils/Toast';

// graphql
import { DELETE_PROJECT } from '../../graphql/mutation';
import {
    GET_PROJECT_BY_USER,
    GET_LAST_PROJECTS_UPDATE_BY_USER,
} from '../../graphql/query';

// types, interfaces & enums
import { TypographyVariantEnum, ProgressTypeEnum } from '../../enums';
import { IDeleteProject, IProject } from '../../types/Project';

// images & icons
import { DotsVerticalIcon, ColorSwatchIcon } from '@heroicons/react/solid';

type CardSmallProps = {
    project: IProject;
    modalUpdateOrDeleteID: string;
    setModalUpdateOrDeleteID: (value: string) => void;
};

const CardSmall = ({
    project,
    modalUpdateOrDeleteID,
    setModalUpdateOrDeleteID,
}: CardSmallProps) => {
    const [showAction, setShowAction] = useState<boolean>(false);
    const [showDeleteProject, setShowDeleteProject] = useState<boolean>(false);

    const [deleteProject] = useMutation<IDeleteProject>(DELETE_PROJECT, {
        onCompleted: () => {
            ToastSuccess('Votre projet a bien été supprimé ! 😊');
        },
        onError: () => {
            ToastError("Votre projet n'a pas pu être supprimé :(");
        },
        refetchQueries: [GET_PROJECT_BY_USER, GET_LAST_PROJECTS_UPDATE_BY_USER],
    });

    const handleDelete = () =>
        deleteProject({
            variables: {
                deleteProjectId: project.id,
            },
        });

    return (
        <div className="flex flex-col items-start bg-blue-300 rounded p-6">
            <div className="flex justify-between w-full">
                <ColorSwatchIcon className="h-8 w-8 text-primary-main" />

                <div className="relative flex-shrink-0 ml-3 block">
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

                    {showAction && modalUpdateOrDeleteID === project.id && (
                        <ActionBase
                            className="top-8 right-2"
                            dataId={project.id}
                            setShowAction={setShowAction}
                            setShowDeleteData={setShowDeleteProject}
                        />
                    )}
                </div>
            </div>

            <Typography
                variant={TypographyVariantEnum.H5}
                color="text-primary-main"
                fontSize="text-1xl"
                fontWeight="font-bold"
                className="w-full"
            >
                {project.name}
            </Typography>

            <div className="w-full mt-2">
                <Progress items={project?.tasks} type={ProgressTypeEnum.TASK} />
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

export default CardSmall;
