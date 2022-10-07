import { DotsVerticalIcon } from '@heroicons/react/solid';
import { ClockIcon, FlagIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const CardTask = ({
    task,
    openModal,
    setOpenModal,
}: {
    task: any;
    openModal?: number;
    setOpenModal: (id: number) => void;
}) => {
    const showModal = (id: number) => {
        setOpenModal(id);
    };

    const hideModal: () => void = () => {
        setOpenModal(0);
    };

    return (
        <div
            className="relative block p-7 shadow overflow-hidden border border-gray-100 rounded-lg w-80 h-97 mr-4 "
            key={task.id}
        >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="justify-between sm:flex ">
                <div>
                    <h5 className="text-xl font-bold text-blue-700">
                        Task n° : {task.id}
                    </h5>
                    <h6 className="text-xl text-blue-600">{task.subject}</h6>
                    <p className="mt-1 text-xs font-medium text-blue-500">
                        By : {task.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-blue-300 flex">
                        <ClockIcon className="w-3 mr-1" />
                        {task.createdAt} - {task.dueDate}
                    </p>
                    <div className="flex mt-5 text-center">
                        <FlagIcon className="w-4 mr-2" />
                        <p className=" bg-green-100 rounded-lg p-1 mr-2">
                            Illustration
                        </p>
                        <p className=" bg-yellow-200 rounded-lg p-1">
                            UX Design
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-1 hidden sm:block">
                    {task.id === openModal ? (
                        <Modal>
                            <Link to={`/editTask/:${task.id}`}>Modifier</Link>
                            <div>
                                <button type="button" onClick={hideModal}>
                                    Fermer
                                </button>
                            </div>
                        </Modal>
                    ) : (
                        <button
                            type="button"
                            onClick={() => showModal(task.id)}
                        >
                            <DotsVerticalIcon className="text-gray-900 w-6" />
                        </button>
                    )}
                </div>
            </div>
            <div className="flex mt-6">
                <p className="mt-1 text-xs font-medium text-blue-500">
                    Priority : {task.priority} <br /> Status : {task.status}
                </p>
            </div>
            {/* <div className="flex mt-6">
        <p className="mt-1 text-xs font-medium text-blue-400">
          Due Date : {task.dueDate}
        </p>
      </div> */}
            <div className="mt-4">
                <p className="text-sm text-blue-400">{task.description}</p>
            </div>
        </div>
    );
};
export default CardTask;
