import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTasks from "../data/DataTasks";
import Modal from "../components/Modal";
const urlBack = process.env.REACT_APP_URL_BACK;
const Tasks = () => {
  const [openModal, setOpenModal] = useState<number>();
  const [tasks, setTasks] = useState([]);
  console.log(urlBack);

  const showModal = (id: number) => {
    setOpenModal(id);
  };
  const hideModal: () => void = () => {
    setOpenModal(0);
  };

  useEffect(() => {
    axios.get(`${urlBack}/Task`).then((res) => setTasks(res.data));
  }, []);
  return (
    <div className="pl-20">
      <h1 className="flex justify-center text-4xl font-paytone-one text-violet-800 p-2">
        Liste des tâches
      </h1>
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
                      <button type="button" onClick={() => showModal(data.id)}>
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
    </div>
  );
};

export default Tasks;
