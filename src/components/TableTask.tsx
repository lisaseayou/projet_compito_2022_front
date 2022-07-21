import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

const TableTask = ({
  task,
  openModal,
  setOpenModal,
}: {
  task: any;
  openModal?: number;
  setOpenModal: (id: number) => void;
}) => {
  useEffect(() => {
    console.log("render");
  }, [openModal]);

  const showModal = (id: number) => {
    setOpenModal(id);
  };

  const hideModal: () => void = () => {
    setOpenModal(0);
  };
  return (
    <tbody key={task.id}>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
          {task.id}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
          {task.name}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
          {task.subject}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
          {task.priority}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
          {task.status}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
          {task.createDate}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64">
          {task.dueDate}
        </td>
        <td className="border-b border-gray-200 bg-white text-center text-sm w-64">
          {task.id === openModal ? (
            <Modal>
              <Link to={`/editTask/:${task.id}`}>Modifier</Link>
              {console.log(openModal)}
              <div>
                <button type="button" onClick={hideModal}>
                  Close
                </button>
              </div>
            </Modal>
          ) : (
            <button type="button" onClick={() => showModal(task.id)}>
              <DotsHorizontalIcon className="w-4" />
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default TableTask;
