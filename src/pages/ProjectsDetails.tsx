import ProjectMembersList from "../components/Projects/ProjectMembersList";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/query";

const ProjectsDetails = () => {
  const params = useParams(); 
  const {loading, error, data} = useQuery(GET_PROJECT, {variables: {projectId: params.projectId}});
  console.log(data);
  if (loading) {
    return <p>loading</p>
  } 

  return (
    <div className="ml-12 flex flex-col w-full h-full">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        {" "}
        <p className="text-6xl font-paytone-one text-violet-800 p-4">
        {data.project.name}
        </p>
        <div className="w-full flex justify-start pl-20 mb-20">
          <a
            className="inline-flex items-center px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            href="/projects"
          >
            <span className="text-sm font-medium">Retourner à la liste</span>

            <svg
              className="w-5 h-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
      <p></p>
      <div className="w-3/12 flex justify-start flex-col pl-24 my-1.5">
        <p className="font-poppins text-2xl font-semibold mb-1.5 ">
          Membres du projet :{" "}
        </p>
        <ProjectMembersList />
      </div>
    </div>
  );
};

export default ProjectsDetails;
