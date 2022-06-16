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
      <h1 className="flex justify-center text-4xl font-paytone-one text-violet-800 p-2">
        Liste des tâches
      </h1>
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
