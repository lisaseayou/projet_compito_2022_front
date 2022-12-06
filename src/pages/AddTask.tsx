import { useMutation } from '@apollo/client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import SelectStatus from '../components/Tasks/SelectStatus';
import { ADD_TASK } from '../graphql/mutation';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ToastSuccess, ToastError } from '../utils/Toast';
import { GET_ALL_TASKS } from '../graphql/query';
import Cookies from 'js-cookie';
import { OnSubmitFormType } from '../types';

interface IUserDatas {
    id: string;
    name: string;
    email: string;
}

interface IFormDatas {
    name: string;
    status: string;
    dueDate: string;
    initialSpentTime: number;
    additionalSpentTime: number[];
    advancement: number;
    projectId: string;
    userId: string;
}

function AddTask() {
    const navigate = useNavigate();

    const [userDatas, setUserDatas] = useState<IUserDatas>({
        id: '8f730a69-ae46-4514-9248-22f55217f6c7',
        name: '',
        email: '',
    });

    const [formData, setFormData] = useState<IFormDatas>({
        name: '',
        status: '',
        dueDate: new Date('DD/MM/YYYY').toString(),
        initialSpentTime: 0,
        additionalSpentTime: [],
        advancement: 0,
        projectId: 'a0ab15ea-546b-49aa-b932-68aaab6fd564',
        userId: userDatas?.id,
    });

    const [addTask] = useMutation(ADD_TASK, {
        onCompleted: () => {
            ToastSuccess('Votre tâche est ajoutée!');
            setFormData({
                name: '',
                status: '',
                dueDate: new Date('DD/MM/YYYY').toString(),
                initialSpentTime: 0,
                additionalSpentTime: [],
                advancement: 0,
                projectId: 'a0ab15ea-546b-49aa-b932-68aaab6fd564',
                userId: userDatas?.id,
            });
        },
        onError: () => {
            ToastError("Votre tâche n'a pas pu être ajoutée :(");
        },
        refetchQueries: [GET_ALL_TASKS],
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit: OnSubmitFormType = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask({ variables: { data: formData } });
        navigate('../tasks', { replace: true });
    };

    useEffect(() => {
        if (Cookies.get('signedin')) {
            setUserDatas(
                JSON.parse(localStorage.getItem('userLogged') as string)
            );
        }
    }, []);

    useEffect(() => {
        setFormData({
            ...formData,
            userId: userDatas?.id ?? '',
        });
    }, [userDatas]);

    return (
        <div className="flex flex-col justify-center items-center w-full h-full ">
            <p className="text-4xl font-paytone-one text-violet-800 p-4">
                Ajouter une tâche
            </p>

            <form
                className="flex flex-col w-90 m-10 p-3 "
                onSubmit={handleSubmit}
            >
                <div className="flex justify-evenly items-center m-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                    </svg>
                    <p className="text-l font-bold text-gray-900">Sujet</p>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                        className="border border-pink-400 w-44 m-3"
                    />
                </div>

                {/* <div className="flex items-center m-3 content-between">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                    <p className="text-l font-bold text-gray-900">Projet</p>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="project"
                        value={formData.project}
                        className="border border-pink-400 w-44 m-2"
                    />
                </div> */}
                <div className="flex justify-evenly items-center m-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                    </svg>
                    <p className="text-l font-bold text-gray-900">Status</p>
                    <SelectStatus
                        value={formData.status}
                        handleSelect={handleChange}
                    />
                </div>
                <div className="flex justify-evenly items-center m-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                    </svg>
                    <p className="text-l font-bold text-gray-900">
                        Date de fin
                    </p>
                    <input
                        type="date"
                        onChange={handleChange}
                        name="dueDate"
                        className="border border-pink-400 w-44 m-3"
                    />
                </div>
                <div className="flex justify-center m-3 content-between">
                    <button
                        type="submit"
                        className="px-2 border rounded-lg w-24 text-white m-2 bg-violet-800 hover:bg-pink-400 mt-7 p-2"
                    >
                        Créer
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default AddTask;
