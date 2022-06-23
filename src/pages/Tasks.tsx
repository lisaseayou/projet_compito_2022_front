import { useState } from "react";
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
      <h1 className="flex justify-center text-4xl font-paytone-one text-violet-800 p-2">
        Liste des tâches
      </h1>
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
