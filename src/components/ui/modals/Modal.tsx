import ReactModal from 'react-modal';
import Typography from '../Typography';
import { XCircleIcon } from '@heroicons/react/solid';
import { FormEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ButtonVariantEnum,
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../../enums';
import IconWithBg from '../Icons/IconWithBg';
import { OnSubmitFormType } from '../../../types';
import { IUser } from '../../../types/User';
import Button from '../Buttons/Button';
import ImageModalSplitFullHeight from '../../images/ImageModalSplitFullHeight';

type ModalProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    title: string;
    description: string;
    buttonLabel: string;
    image: string;
    renderInputs: ReactNode;
    mutationFn: (option: object) => void;
    formDatas: object;
    onSuccessRedirect: string;
    icon: IconEnum;
};

ReactModal.setAppElement('#root');

const Modal = ({
    show,
    setShow,
    title,
    description,
    buttonLabel,
    renderInputs,
    image,
    mutationFn,
    formDatas,
    onSuccessRedirect,
    icon,
}: ModalProps) => {
    const navigate = useNavigate();

    const user: IUser = JSON.parse(
        localStorage.getItem('userLogged') as string
    );

    const handleSubmit: OnSubmitFormType = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutationFn({ variables: { data: { ...formDatas, userId: user?.id } } });
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

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center justify-center w-full mx-auto mt-8 mb-0"
                        >
                            {renderInputs}

                            <Button
                                variant={ButtonVariantEnum.FORM}
                                className="w-full max-w-sm"
                            >
                                {buttonLabel}
                            </Button>
                        </form>
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
