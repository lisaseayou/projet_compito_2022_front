// hooks
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
import { ADD_TASK } from '../../graphql/mutation';
import {
    GET_PROJECT_BY_USER,
    GET_LAST_PROJECTS_UPDATE_BY_USER,
} from '../../graphql/query';

// types, interfaces & enums
import { IUser } from '../../types/User';
import { IAddTask } from '../../types/Task';
import { IconEnum, OpacityEnum, RouteEnum } from '../../enums';

// images & icons
import AddTaskImg from '../../assets/add-task.svg';

type ModalCreateTaskProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    projectId: any;
    status: string;
};

const ModalCreateTask = ({
    show,
    setShow,
    projectId,
    status,
}: ModalCreateTaskProps) => {
    const navigate = useNavigate();
    const user: IUser = useSelector((state: any) => state.user);

    const {
        control,
        watch,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const [globalErrorMessage, setGlobalFormMessage] = useState('');

    console.log(watch());

    const [addTask] = useMutation<IAddTask>(ADD_TASK, {
        onCompleted: () => {
            ToastSuccess('La tache a bien été ajoutée !');
            setShow(false);
            navigate(`${RouteEnum.PROJECT_DETAILS}/${projectId}`);
        },
        onError: (error) => {
            setGlobalFormMessage(error?.message);
            // ToastError("Votre projet n'a pas pu être ajoutée :(");
        },
        refetchQueries: [GET_PROJECT_BY_USER, GET_LAST_PROJECTS_UPDATE_BY_USER],
    });

    return (
        <Modal
            show={show}
            setShow={setShow}
            title="Créer une tache"
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
                        error={errors?.name}
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
                        error={errors?.password}
                    />
                </>
            }
            buttonLabel="Ajouter"
            image={AddTaskImg}
            mutationFn={addTask}
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

export default ModalCreateTask;
