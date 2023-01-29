// hooks
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { FieldError, useForm } from 'react-hook-form';

// components
import TextField from '../ui/form/TextField';
import Icon from '../ui/Icons/Icon';
import Modal from '../ui/modals/Modal';
import TextAreaField from '../ui/form/TextAreaField';

// utils & helpers
import { ToastSuccess } from '../../utils/Toast';
import validation from '../../validation';

// graphql
import { ADD_PROJECT, UPDATE_PROJECT } from '../../graphql/mutation';
import {
    GET_PROJECT_BY_USER,
    GET_LAST_PROJECTS_UPDATE_BY_USER,
} from '../../graphql/query';

// types, interfaces & enums
import { IAddProject, IProject } from '../../types/Project';
import { CrudTypeEnum, IconEnum, OpacityEnum, RouteEnum } from '../../enums';

// images & icons
import Work from '../../assets/work-pressure.svg';

type ModalProjectProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    title: string;
    project?: IProject;
    mutationType?: CrudTypeEnum;
};

const ModalProject = ({
    show,
    setShow,
    title,
    project,
    mutationType,
}: ModalProjectProps) => {
    const navigate = useNavigate();

    const {
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const [globalErrorMessage, setGlobalFormMessage] = useState('');

    const [addProject] = useMutation<IAddProject>(ADD_PROJECT, {
        onCompleted: () => {
            ToastSuccess('Votre projet a bien été ajoutée!');
            setShow(false);
            reset();
            navigate(RouteEnum.PROJECTS);
        },
        onError: (error) => {
            setGlobalFormMessage(error?.message);
            // ToastError("Votre projet n'a pas pu être ajoutée :(");
        },
        refetchQueries: [GET_PROJECT_BY_USER, GET_LAST_PROJECTS_UPDATE_BY_USER],
    });

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        onCompleted: (data) => {
            ToastSuccess('Votre projet a bien été mis à jour!');
            setShow(false);
            navigate(RouteEnum.PROJECTS);
        },
        onError: () => {
            console.log('error');
        },
        refetchQueries: [GET_PROJECT_BY_USER, GET_LAST_PROJECTS_UPDATE_BY_USER],
    });

    return (
        <Modal
            show={show}
            setShow={setShow}
            title={title}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem, at itaque nostrum!"
            renderInputs={
                <>
                    <TextField
                        control={control}
                        validation={validation.addProject.name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nom du projet"
                        icon={
                            <Icon
                                variant={IconEnum.MAIL}
                                opacity={OpacityEnum.OPACITY_70}
                            />
                        }
                        containerClassName="mb-4 w-full max-w-sm"
                        error={errors?.name as FieldError | undefined}
                        defaultValue={project?.name}
                    />

                    <TextAreaField
                        control={control}
                        validation={validation.addProject.description}
                        name="description"
                        id="description"
                        row={8}
                        placeholder="Description du projet"
                        icon={
                            <Icon
                                variant={IconEnum.MAIL}
                                opacity={OpacityEnum.OPACITY_70}
                            />
                        }
                        containerClassName="mb-4 w-full max-w-sm"
                        error={errors?.description as FieldError | undefined}
                        defaultValue={project?.description}
                    />
                </>
            }
            buttonLabel={title}
            image={Work}
            mutationCreateFn={addProject}
            mutationUpdateFn={updateProject}
            mutationType={mutationType}
            project={project}
            formDatas={watch()}
            onSuccessRedirect="../projects"
            icon={IconEnum.BRIEFCASE}
        />
    );
};

export default ModalProject;
