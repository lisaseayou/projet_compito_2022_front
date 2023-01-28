// hooks
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import ReactModal from 'react-modal';
import Typography from '../Typography';
import IconWithBg from '../Icons/IconWithBg';
import ImageModalSplitFullHeight from '../../images/ImageModalSplitFullHeight';
import Form from '../../Form/Form';
import FormError from '../../Form/FormError';

// types, interfaces & enums
import { IUser } from '../../../types/User';
import { IProject } from '../../../types/Project';
import { ITask } from '../../../types/Task';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    TextTransformEnum,
    TypographyVariantEnum,
    CrudTypeEnum,
} from '../../../enums';

// images & icons
import { XCircleIcon } from '@heroicons/react/solid';

type ModalProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    title: string;
    description: string;
    buttonLabel: string;
    image: string;
    renderInputs: ReactNode;
    mutationCreateFn?: (option: object) => void;
    mutationUpdateFn?: (option: object) => void;
    mutationType?: CrudTypeEnum;
    formDatas: object;
    onSuccessRedirect: string;
    icon: IconEnum;
    project?: IProject;
    task?: ITask;
};

// ReactModal.setAppElement('#root');

const Modal = ({
    show,
    setShow,
    title,
    description,
    buttonLabel,
    renderInputs,
    image,
    mutationCreateFn,
    mutationUpdateFn,
    mutationType = CrudTypeEnum.CREATE,
    formDatas,
    onSuccessRedirect,
    icon,
    project,
    task,
}: ModalProps) => {
    const navigate = useNavigate();

    const user: IUser = useSelector((state: any) => state.user);

    const {
        handleSubmit,
        formState: { errors, isSubmitted, isValid },
    } = useForm({ mode: 'onBlur' });

    const [globalErrorMessage, setGlobalFormMessage] = useState('');

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        mutationCreateFn &&
            mutationType === CrudTypeEnum.CREATE &&
            mutationCreateFn({
                variables: { data: { ...formDatas, userId: user?.id } },
            });

        mutationUpdateFn &&
            project &&
            mutationType === CrudTypeEnum.UPDATE &&
            mutationUpdateFn({
                variables: {
                    data: formDatas,
                    updateProjectId: project.id,
                },
            });

        mutationUpdateFn &&
            task &&
            mutationType === CrudTypeEnum.UPDATE &&
            mutationUpdateFn({
                variables: {
                    data: formDatas,
                    updateTaskId: task?.id,
                },
            });

        navigate(onSuccessRedirect, { replace: true });
    };

    return (
        <div>
            <ReactModal
                isOpen={show}
                onRequestClose={() => setShow(false)}
                overlayClassName="fixed z-50 inset-0 bg-black bg-opacity-50"
                className="absolute  top-modalTop sm:top-1/2 left-1/2 sm:left-modalLeft flex items-center bg-white rounded outline-0 p-0 w-11/12 sm:w-8/12 md:w-10/12 max-w-6xl h-9/12 border border-slate-300 -translate-y-1/2 -translate-x-1/2 overflow-auto"
            >
                <section className="relative flex justify-center flex-wrap w-full h-full">
                    <button
                        className="absolute top-4 right-4 z-50"
                        onClick={() => setShow(false)}
                    >
                        <XCircleIcon className="h-12 w-12 text-primary-main lg:text-white" />
                    </button>

                    <div className="flex flex-col justify-center w-full md:w-3/5 lg:w-1/2 text-center px-4">
                        <div className="max-w-lg mx-auto text-center">
                            <IconWithBg variant={icon} />

                            <Typography
                                variant={TypographyVariantEnum?.H1}
                                color="text-primary-main"
                                fontSize={'text-3xl sm:text-4xl'}
                                fontWeight={FontWeightEnum.BOLD}
                                textTransform={TextTransformEnum.NORMAL}
                                className="w-full mt-6 mb-6 sm:mb-6"
                            >
                                {title}
                            </Typography>

                            <Typography
                                variant={TypographyVariantEnum?.H5}
                                color="text-primary-main"
                                fontSize={FontSizeEnum.BASE}
                                fontWeight={FontWeightEnum.NORMAL}
                                textTransform={TextTransformEnum.NORMAL}
                                className="w-full mt-6"
                            >
                                {description}
                            </Typography>
                        </div>

                        <Form
                            containerClassName="w-full flex flex-col items-center"
                            containerStyle={{ maxWidth: 546 }}
                            formClassName="flex flex-col items-center justify-center w-full mx-auto mt-8 mb-0"
                            buttonSubmitLabel={buttonLabel}
                            isValid={isValid}
                            handleSubmit={handleSubmit}
                            onSubmit={onSubmit}
                        >
                            <FormError
                                isSubmitted={isSubmitted}
                                globalErrorMessage={globalErrorMessage}
                                containerClassName="w-11/12 max-w-sm flex justify-center"
                            />
                            {renderInputs}
                        </Form>
                    </div>

                    <ImageModalSplitFullHeight
                        src={image}
                        classNameContainer="hidden lg:flex"
                    />
                </section>
            </ReactModal>
        </div>
    );
};

export default Modal;
