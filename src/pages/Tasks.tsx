import { useState } from "react";
import { Link } from "react-router-dom";
import CardTask from "../components/CardTask";
import TableTask from "../components/TableTask";
import DataTasks from "../data/DataTasks";

const Tasks = () => {
  const [handleDisplay, setHandleDisplay] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<number>();

  const showCards = (e: any): void => {
    if (e.target) {
      setHandleDisplay(!handleDisplay);
    } else {
      setHandleDisplay(false);
    }
  };

  return (
    <div className="pl-20">
      <div className="flex justify-between mt-3">
        <div></div>
        <h1 className="flex justify-center text-4xl font-paytone-one text-violet-800 p-2">
          Liste des tâches
        </h1>
        <Link to="/addtask"
          className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-violet-800 rounded group active:bg-violet-500 focus:outline-none focus:ring"
        >

          <span className="text-sm font-medium transition-all group-hover:ml-4">
          <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
            Ajouter une tâche
          </span>
        </Link>
      </div>
      <button
        type="button"
        className="ml-3 mr-3 mb-4 bg-gray-100 border border-gray-100 p-1 rounded-lg"
        onClick={showCards}
      >
        {handleDisplay ? "Afficher en tableau" : "Afficher en card"}
      </button>
      {handleDisplay ? (
        <div className="flex flex-col justify-center items-center w-full h-full ">
          <div className="w-full flex justify-start pl-10 ">
            <div className="flex">
              {DataTasks.map((task) => (
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
          <table className="m-4 leading-normal ">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider">
                  Name
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
            {DataTasks.map((task) => (
              <TableTask
                key={task.id}
                task={task}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Tasks;
