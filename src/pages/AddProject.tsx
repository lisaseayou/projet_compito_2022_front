import { useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';
import { ADD_PROJECT } from '../queries/mutation';

function AddProject() {
    const [formProject, setFormProject] = useState({
        name: '',
        description: '',
        userId: '85d96da9-f31f-42ce-964c-8aaa6b9921a9',
    });

    console.log(formProject);

    const [addProject] = useMutation(ADD_PROJECT, {
        onCompleted: () => {
            setFormProject({
                name: '',
                description: 'cgdfgvd',
                userId: 'b4ee8791-b85c-43c2-8118-85105c026839',
            });
            console.log('Project added successfully');
        },
        onError: () => console.log('Project failed'),
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormProject({ ...formProject, [e.target.name]: e.target.value });
    };

    const handleSubmit: any = (e: SubmitEvent) => {
        e.preventDefault();
        addProject({ variables: formProject });
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-full ">
            <p className="text-4xl font-paytone-one text-violet-800 p-4">
                Créer un nouveau projet
            </p>

            <form
                className="flex flex-col w-250 m-10 p-3 "
                onSubmit={handleSubmit}
            >
                <div className="flex items-center m-3 content-between">
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
                    <p className="text-l font-bold text-gray-900">
                        Nom de ton projet :{' '}
                    </p>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="name"
                        value={formProject.name}
                        className="border border-pink-400 w-44 m-2"
                    />
                </div>
                <div className="flex items-center m-3 content-between">
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
                    <p className="text-l font-bold text-gray-900">
                        Description :{' '}
                    </p>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="description"
                        value={formProject.description}
                        className="border border-pink-400 w-44 m-2"
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
        </div>
    );
}

export default AddProject;
