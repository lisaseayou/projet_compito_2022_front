import { useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconEnum, OpacityEnum } from '../../enums';
import { ADD_PROJECT } from '../../graphql/mutation';
import {
    GET_ALL_PROJECTS,
    GET_LAST_PROJECTS_UPDATE,
} from '../../graphql/query';
import { ToastError, ToastSuccess } from '../../utils/Toast';
import TextField from '../ui/form/TextField';
import Icon from '../ui/Icons/Icon';
import Modal from '../ui/modals/Modal';
import Work from '../../assets/work-pressure.svg';
import TextAreaField from '../ui/form/TextAreaField';

type ModalCreateProjectProps = {
    show: boolean;
    setShow: (value: boolean) => void;
};

const ModalCreateProject = ({ show, setShow }: ModalCreateProjectProps) => {
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        name: '',
        description: '',
    });

    const [addProject] = useMutation(ADD_PROJECT, {
        onCompleted: () => {
            ToastSuccess('Votre projet a bien été ajoutée!');
            setFormDatas({
                name: '',
                description: '',
            });
            setShow(false);
            navigate('/projects');
        },
        onError: () => {
            ToastError("Votre projet n'a pas pu être ajoutée :(");
        },
        refetchQueries: [GET_ALL_PROJECTS, GET_LAST_PROJECTS_UPDATE],
    });

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    return (
        <Modal
            show={show}
            setShow={setShow}
            title="Créer un projet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa culpa autem, at itaque nostrum!"
            renderInputs={
                <>
                    <TextField
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
                        className="mb-4 w-full max-w-sm"
                        value={formDatas.name}
                        handleChange={handleChange}
                    />

                    <TextAreaField
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
                        className="mb-4 w-full max-w-sm"
                        value={formDatas.description}
                        handleChange={handleChange}
                    />
                </>
            }
            buttonLabel="Créer un projet"
            image={Work}
            mutationFn={addProject}
            formDatas={formDatas}
            onSuccessRedirect="../projects"
            icon={IconEnum.BRIEFCASE}
        />
    );
};

export default ModalCreateProject;
