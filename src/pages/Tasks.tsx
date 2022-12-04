// @ts-nocheck

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardTask from '../components/Tasks/CardTask';
import TableTask from '../components/Tasks/TableTask';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useQuery } from '@apollo/client';
import { GET_ALL_TASKS } from '../graphql/query';
import TasksList from '../components/Tasks/TasksList';
import Typography from '../components/ui/Typography';
import { ButtonVariantEnum, RouteEnum, TypographyVariantEnum } from '../enums';
import { ITask } from '../types';
import Button from '../components/ui/Buttons/Button';
import SwitchButton from '../components/ui/Buttons/SwitchButton';

const Tasks = () => {
    const navigate = useNavigate();
    const [showTaskCard, setShowTaskCard] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<number>();

    const { loading, error, data } = useQuery<Itask>(GET_ALL_TASKS);

    if (loading) {
        return <p>loading</p>;
    }

    if (error) {
        return <p>error</p>;
    }

    const showCards = (e: any) => {
        if (e.target) {
            setShowTaskCard(!showTaskCard);
        } else {
            setShowTaskCard(false);
        }
    };

    const find = data.allTasks.map((task: ITask) => task.created_at);

    return (
        <div className="grid grid-cols-12 gap-0 pl-20">
            <div className="col-start-1 col-end-11 flex justify-center mt-3">
                <Typography
                    variant={TypographyVariantEnum?.H1}
                    color="text-primary-main"
                    fontSize="text-4xl"
                    className="flex justify-center font-paytone-one "
                >
                    Liste des tâches
                </Typography>
            </div>

            <div className="col-start-11 col-end-13 flex justify-center mt-3">
                <Button
                    variant={ButtonVariantEnum.CTA}
                    onClick={() => navigate(RouteEnum.ADD_TASK)}
                >
                    Ajouter une tâche
                </Button>
            </div>

            <div className="col-start-1 col-end-13">
                <SwitchButton onClick={showCards} show={showTaskCard} />
            </div>
            {showTaskCard ? (
                <div className="flex flex-col justify-center items-center w-full h-full">
                    {/* <div className="w-full flex justify-center pl-10 ">
                        
                            {data.allTasks.map((task: ITask) => (
                                <CardTask
                                    key={task.id}
                                    task={task}
                                    openModal={openModal}
                                    setOpenModal={setOpenModal}
                                />
                            ))}
                        
                    </div> */}
                </div>
            ) : (
                <div className="col-start-1 col-end-13">
                    <TasksList data={data?.allTasks} />
                </div>
            )}
            {/*<table className="m-4 leading-normal ">
           <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  Name
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
            {data.allTasks.map((task: ITask) => (
              <TableTask
                key={task.id}
                task={task}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
            </table>*/}

            <ToastContainer />
        </div>
    );
};

export default Tasks;
