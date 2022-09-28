import ReactModal from 'react-modal';
import Typography from '../Typography';
import Work from '../../../assets/work-pressure.svg';
import { XCircleIcon } from '@heroicons/react/solid';
import { ADD_PROJECT } from '../../../graphql/mutation';
import { useMutation } from '@apollo/client';
import { ToastError, ToastSuccess } from '../../../utils/Toast';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from '../form/InputText';
import TextArea from '../form/TextArea';
import { GET_ALL_PROJECTS } from '../../../graphql/query';
import { TypographyVariantEnum } from '../../../enums';

type ModalCreateProjectProps = {
    show: boolean;
    setShow: (value: boolean) => void;
};

const ModalCreateProject = ({ show, setShow }: ModalCreateProjectProps) => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('userLogged') as string);

    const [formProject, setFormProject] = useState({
        name: '',
        description: '',
        userId: user?.id,
    });

    const [addProject] = useMutation(ADD_PROJECT, {
        onCompleted: () => {
            ToastSuccess('Votre tâche est ajoutée!');
            setFormProject({
                name: '',
                userId: user?.id,
                description: '',
            });
        },
        onError: () => {
            ToastError("Votre tâche n'a pas pu être ajoutée :(");
        },
        refetchQueries: [GET_ALL_PROJECTS],
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormProject({ ...formProject, [e.target.name]: e.target.value });
    };

    const handleSubmit: any = (e: SubmitEvent) => {
        e.preventDefault();
        addProject({ variables: { data: formProject } });
        navigate('../projects', { replace: true });
    };

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
                                variant={TypographyVariantEnum.H1}
                                color="text-primary-main"
                                fontSize="text-3xl"
                                fontWeight="font-bold"
                                className="w-full"
                            >
                                Créer un projet
                            </Typography>

                            <Typography
                                variant={TypographyVariantEnum.H5}
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
                            onSubmit={handleSubmit}
                            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
                        >
                            <div>
                                <InputText
                                    label="Nom du projet"
                                    placeholder="Name"
                                    name="name"
                                    value={formProject.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <TextArea
                                    label="Entrer une Description"
                                    row={8}
                                    placeholder="Description"
                                    name="description"
                                    value={formProject.description}
                                    onChange={handleChange}
                                />
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

export default ModalCreateProject;
