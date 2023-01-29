// hooks
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { FieldError, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

// components
import TextField from '../ui/form/TextField';
import Icon from '../ui/Icons/Icon';
import Modal from '../ui/modals/Modal';
import TextAreaField from '../ui/form/TextAreaField';

// utils & helpers
import { ToastSuccess } from '../../utils/Toast';
import validation from '../../validation';

// graphql
import { ADD_TASK, UPDATE_TASK } from '../../graphql/mutation';
import {
    GET_PROJECT_BY_USER,
    GET_LAST_PROJECTS_UPDATE_BY_USER,
    GET_PROJECT,
    GET_ALL_PROJECTS,
    GET_ALL_TASKS,
} from '../../graphql/query';

// types, interfaces & enums
import { IUser } from '../../types/User';
import { IAddTask, ITask } from '../../types/Task';
import { CrudTypeEnum, IconEnum, OpacityEnum, RouteEnum } from '../../enums';
import { IRootState } from '../../types';

// images & icons
import AddTaskImg from '../../assets/add-task.svg';

type ModalTaskProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    projectId: string;
    status?: string;
    title: string;
    task?: ITask;
    mutationType?: CrudTypeEnum;
};

const ModalTask = ({
    show,
    setShow,
    projectId,
    status,
    title,
    task,
    mutationType,
}: ModalTaskProps) => {
    const navigate = useNavigate();
    const user: IUser = useSelector((state: IRootState) => state.user);

    const {
        control,
        watch,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const [globalErrorMessage, setGlobalFormMessage] = useState('');

    const [addTask] = useMutation<IAddTask>(ADD_TASK, {
        onCompleted: () => {
            ToastSuccess('La tache a bien été ajoutée !');
            reset();
            setShow(false);
            navigate(`${RouteEnum.PROJECT_DETAILS}/${projectId}`);
        },
        onError: (error) => {
            setGlobalFormMessage(error?.message);
            // ToastError("Votre projet n'a pas pu être ajoutée :(");
        },
        refetchQueries: [GET_PROJECT],
    });

    const [updateTask] = useMutation(UPDATE_TASK, {
        onCompleted: (data) => {
            ToastSuccess('La tache a bien été modifié ! 😊');
            setShow(false);
        },
        onError: () => {
            console.log('error');
        },
        refetchQueries: [
            GET_PROJECT,
            GET_ALL_PROJECTS,
            GET_ALL_TASKS,
            GET_PROJECT_BY_USER,
            GET_LAST_PROJECTS_UPDATE_BY_USER,
        ],
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
                        validation={validation.addTask.name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Titre de la tache"
                        icon={
                            <Icon
                                variant={IconEnum.MAIL}
                                opacity={OpacityEnum.OPACITY_70}
                            />
                        }
                        containerClassName="mb-4 w-full max-w-sm"
                        error={errors?.name as FieldError | undefined}
                        defaultValue={task?.name}
                    />

                    <TextAreaField
                        control={control}
                        validation={validation.addTask.description}
                        name="description"
                        id="description"
                        row={8}
                        placeholder="Description de la tache"
                        icon={
                            <Icon
                                variant={IconEnum.MAIL}
                                opacity={OpacityEnum.OPACITY_70}
                            />
                        }
                        containerClassName="mb-4 w-full max-w-sm"
                        error={errors?.description as FieldError | undefined}
                        defaultValue={task?.description}
                    />
                </>
            }
            buttonLabel={title}
            image={AddTaskImg}
            mutationCreateFn={addTask}
            mutationUpdateFn={updateTask}
            mutationType={mutationType}
            task={task}
            formDatas={{
                ...watch(),
                status,
                additionalSpentTime: [1, 2],
                advancement: 0,
                dueDate: '12/01/2022',
                initialSpentTime: 0,
                projectId: projectId,
                userId: user?.id,
            }}
            onSuccessRedirect={`${RouteEnum.PROJECT_DETAILS}/${projectId}`}
            icon={IconEnum.BRIEFCASE}
        />
    );
};

export default ModalTask;
