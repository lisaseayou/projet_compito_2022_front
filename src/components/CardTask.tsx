import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const CardTask = ({ task }: { task: any }) => {
  const [openModal, setOpenModal] = useState<number>();

  const showModal = (id: number) => {
    setOpenModal(id);
  };

  const hideModal: () => void = () => {
    setOpenModal(0);
  };

  return (
    <div className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg  w-80 h-96 mr-1.5">
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex ">
        <div>
          <h5 className="text-xl font-bold text-gray-900">{task.id}</h5>
          <h6 className="text-xl text-gray-900">{task.subject}</h6>
          <p className="mt-1 text-xs font-medium text-gray-900">
            By : {task.name}
          </p>
          <p className="mt-1 text-xs font-medium text-gray-600">
            Create date : {task.createDate} <br />
            Due date : {task.dueDate}
          </p>
        </div>
        <div className="flex-shrink-0 hidden ml-3 sm:block">
          {task.id === openModal ? (
            <Modal openModal={0}>
              <Link to={`/editTask/:${task.id}`}>Edit</Link>
              <div>
                <button type="button" onClick={hideModal}>
                  Close
                </button>
              </div>
            </Modal>
          ) : (
            <button type="button" onClick={() => showModal(task.id)}>
              .....
            </button>
          )}
        </div>
      </div>
      <dl className="flex mt-6">
        <p className="mt-1 text-xs font-medium text-gray-600">
          Priority : {task.priority} <br /> Status :{" "}
          {task.status === true ? "Open" : "Close"}
        </p>
      </dl>
      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
    </div>
  );
};
export default CardTask;
