// @ts-nocheck

import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardTask from '../components/Tasks/CardTask';
import TableTask from '../components/Tasks/TableTask';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useQuery } from '@apollo/client';
import { GET_ALL_TASKS } from '../queries/query';
import TasksList from '../components/Tasks/TasksList';
import {
    ViewGridIcon,
    ViewListIcon,
    ArrowNarrowLeftIcon,
} from '@heroicons/react/solid';
import Typography, { variantEnum } from '../components/ui/Typography';

const Tasks = () => {
    const [handleDisplay, setHandleDisplay] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<number>();

    const { loading, error, data } = useQuery(GET_ALL_TASKS);

    if (loading) {
        return <p>loading</p>;
    }

    if (error) {
        return <p>error</p>;
    }

    const showCards = (e: any): void => {
        if (e.target) {
            setHandleDisplay(!handleDisplay);
        } else {
            setHandleDisplay(false);
        }
    };

    const find = data.allTasks.map((task: any) => task.created_at);

    return (
        <div className="grid grid-cols-12 gap-0 pl-20">
            <div className="col-start-1 col-end-11 flex justify-center mt-3">
                <Typography
                    variant={variantEnum?.H1}
                    color="text-primary-main"
                    fontSize="text-4xl"
                    className="flex justify-center font-paytone-one "
                >
                    Liste des tâches
                </Typography>
            </div>

            <div className="col-start-11 col-end-13 flex justify-center mt-3">
                <Link
                    to="/addtask"
                    className="relative mr-2 inline-flex items-center px-8 py-3 overflow-hidden text-white bg-primary-main rounded group active:bg-violet-500 focus:outline-none focus:ring"
                >
                    <span className="text-sm font-medium transition-all group-hover:ml-4">
                        <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                            <ArrowNarrowLeftIcon className="w-5 h-5 text-white" />
                        </span>
                        Ajouter une tâche
                    </span>
                </Link>
            </div>
            {/* <button
                type="button"
                className="ml-3 mr-3 mb-4 bg-gray-100 border border-gray-100 p-1 rounded-lg"
                onClick={showCards}
            >
                {handleDisplay ? (
                    <ViewListIcon className="w-8 h-8" />
                ) : (
                    <ViewGridIcon className="w-8 h-8" />
                )}
            </button> */}
            {/* {handleDisplay ? (
                <div className="flex flex-col justify-center items-center w-full h-full ">
                    <div className="w-full flex justify-center pl-10 ">
                        <div className="grid grid-cols-3 gap-10">
                            {data.allTasks.map((task: any) => (
                                <CardTask
                                    key={task.id}
                                    task={task}
                                    openModal={openModal}
                                    setOpenModal={setOpenModal}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <TasksList data={data?.allTasks} />
                    <table className="m-4 leading-normal ">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  Subject
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  Priority
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  Create Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  Due Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            {data.allTasks.map((task: any) => (
              <TableTask
                key={task.id}
                task={task}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          </table>
                </div>
            )} */}
            <ToastContainer />
        </div>
    );
};

export default Tasks;
