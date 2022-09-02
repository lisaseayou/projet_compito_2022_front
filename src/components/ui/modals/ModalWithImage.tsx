import ReactModal from 'react-modal';
import Button from '../Button';
import Typography, { variantEnum } from '../Typography';
import Work from '../../../assets/work-pressure.svg';
import { XCircleIcon } from '@heroicons/react/solid';

type ModalWithImageProps = {
    show: boolean;
    setShow: (value: boolean) => void;
};

const ModalWithImage = ({ show, setShow }: ModalWithImageProps) => {
    return (
        <div>
            <ReactModal
                isOpen={show}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: 0,
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '75%',
                        display: 'flex',
                        alignItems: 'center',
                    },
                }}
            >
                <section className="relative flex flex-wrap lg:items-center w-full h-full">
                    <button
                        className="absolute top-4 right-4 z-50"
                        onClick={() => setShow(false)}
                    >
                        <XCircleIcon className="h-12 w-12 text-white" />
                    </button>

                    <div className="w-full lg:w-1/2">
                        <div className="max-w-lg mx-auto text-center">
                            <Typography
                                variant={variantEnum?.H1}
                                color="text-primary-main"
                                fontSize="text-3xl"
                                fontWeight="font-bold"
                                className="w-full"
                            >
                                Créer un projet
                            </Typography>

                            <Typography
                                variant={variantEnum?.H5}
                                color="text-gray-500"
                                fontSize="text-md"
                                fontWeight="font-semibold"
                                className="w-full my-4"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Et libero nulla eaque error
                                neque ipsa culpa autem, at itaque nostrum!
                            </Typography>
                        </div>

                        <form
                            action=""
                            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
                        >
                            <div>
                                <label className="sr-only" htmlFor="name">
                                    Nom du projet
                                </label>
                                <input
                                    className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">
                                    Entrer une Description
                                </label>
                                <textarea
                                    className="w-full p-3 text-sm border border-gray-200 rounded-lg"
                                    placeholder="description"
                                    rows={8}
                                    id="description"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="block w-full px-5 py-3 text-sm font-medium text-white bg-primary-main rounded-lg"
                            >
                                Créer un projet
                            </button>
                        </form>
                    </div>

                    <div
                        className="relative w-full lg:w-1/2 h-full bg-blue-800"
                        style={{
                            backgroundImage: `url(${Work})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '110%',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="w-full h-full bg-blue-800 opacity-40" />
                    </div>
                </section>
            </ReactModal>
        </div>
    );
};

export default ModalWithImage;
