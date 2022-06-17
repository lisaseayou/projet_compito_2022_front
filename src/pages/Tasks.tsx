import { Link } from "react-router-dom";
import { useState } from "react";
import DataTasks from "../data/DataTasks";
import Modal from "../components/Modal";
import CardTask from "../components/CardTask";

const Tasks = () => {
  const [openModal, setOpenModal] = useState<number>();
  const [isChecked, setIsChecked] = useState(false);

  const showModal = (id: number) => {
    setOpenModal(id);
  };
  const hideModal: () => void = () => {
    setOpenModal(0);
  };

  const showCards = (e: any): void => {
    if (e.target) {
      setIsChecked(!isChecked);
    } else {
      setIsChecked(false);
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
        {isChecked ? "Afficher en tableau" : "Afficher en card"}
      </button>
      {isChecked ? (
        <div className="flex flex-col justify-center items-center w-full h-full ">
          <div className="w-full flex justify-start pl-24 ">
            <div className="flex">
              {DataTasks.map((task, index) => (
                <CardTask key={index} task={task} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <table className="m-4  leading-normal font-poppins">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Create Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {DataTasks.map((data) => {
                return (
                  <tr key={data.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
                      {data.id}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
                      {data.name}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
                      {data.subject}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
                      {data.priority}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
                      {data.status === true ? "Open" : "Closed"}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
                      {data.createDate}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
                      {data.dueDate}
                    </td>
                    <td className="border-b border-gray-200 bg-white text-center text-sm w-64">
                      {data.id === openModal ? (
                        <Modal openModal={openModal}>
                          <Link to={`/editTask/:${data.id}`}>Edit</Link>
                          <div>
                            <button type="button" onClick={hideModal}>
                              Close
                            </button>
                          </div>
                        </Modal>
                      ) : (
                        <button
                          type="button"
                          onClick={() => showModal(data.id)}
                        >
                          .....
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Tasks;
