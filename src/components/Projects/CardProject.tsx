import { DotsVerticalIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const CardProject = ({ project }: { project: any }) => {
  return (
    <Link
      className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg  w-80 h-96 mr-1.5"
      to={`/project-details/${project.id}`}
    >
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="justify-between sm:flex ">
        <div>
          <h5 className="text-xl font-bold text-gray-900">{project.name}</h5>
          <p className="mt-1 text-xs font-medium text-gray-600">
            {project.dateStart} - {project.dateEnd}
          </p>
        </div>

        <div className="flex-shrink-0 hidden ml-3 sm:block">
          <DotsVerticalIcon className="text-gray-900 w-6" />
        </div>
      </div>
      <dl className="flex mt-6">
        <div className="flex">
          {/* {project.badges.map((badge) => (
            <p className="flex mr-1.5">{badge.title}</p>
          ))} */}
        </div>
      </dl>
      <div className="mt-4 sm:pr-8">
        <p className="text-sm text-gray-500">{project.description}</p>
      </div>
    </Link>
  );
};
export default CardProject;
