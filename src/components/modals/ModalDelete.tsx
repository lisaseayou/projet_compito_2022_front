import ReactModal from 'react-modal';
import {
    ButtonTypeEnum,
    ButtonVariantEnum,
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Button from '../ui/Buttons/Button';
import IconWithBg from '../ui/Icons/IconWithBg';
import Typography from '../ui/Typography';

type ModalDeleteProps = {
    show: boolean;
    setShow: (value: boolean) => void;
    description: string;
    title: string;
    onDelete: () => void;
};

const ModalDelete = ({
    show,
    setShow,
    description,
    title,
    onDelete,
}: ModalDeleteProps) => {
    return (
        <div>
            <ReactModal
                isOpen={show}
                onRequestClose={() => setShow(false)}
                overlayClassName="fixed z-50 inset-0 bg-black bg-opacity-50"
                className="absolute top-modalTop sm:top-1/2 left-1/2 sm:left-modalLeft flex items-center bg-white rounded outline-0 p-0 w-full max-w-md h-auto border border-slate-300 -translate-y-1/2 -translate-x-1/2 overflow-auto"
            >
                <section className="relative flex justify-center flex-wrap w-full h-full">
                    <div className="flex flex-col justify-center w-full text-center p-6">
                        <div className="w-full mx-auto text-center">
                            <IconWithBg variant={IconEnum.TRASH} />

                            <Typography
                                variant={TypographyVariantEnum?.H4}
                                color="text-primary-main"
                                fontSize={FontSizeEnum.LG}
                                fontWeight={FontWeightEnum.BOLD}
                                textTransform={TextTransformEnum.NORMAL}
                                className="w-full mt-6"
                            >
                                {title}
                            </Typography>

                            <Typography
                                variant={TypographyVariantEnum?.H5}
                                color="text-primary-main"
                                fontSize={FontSizeEnum.BASE}
                                fontWeight={FontWeightEnum.NORMAL}
                                textTransform={TextTransformEnum.NORMAL}
                                className="w-full mt-2"
                            >
                                {description}
                            </Typography>

                            <div className="flex justify-center mt-7">
                                <Button
                                    variant={ButtonVariantEnum.CANCEL}
                                    type={ButtonTypeEnum.BUTTON}
                                    className="mr-2"
                                    onClick={() => setShow(false)}
                                >
                                    Annuler
                                </Button>
                                <Button
                                    variant={ButtonVariantEnum.DELETE}
                                    type={ButtonTypeEnum.BUTTON}
                                    onClick={onDelete}
                                >
                                    Supprimer
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </ReactModal>
        </div>
    );
};

export default ModalDelete;
