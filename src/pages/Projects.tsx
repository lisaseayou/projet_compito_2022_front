import CardsListProject from "../components/Projects/CardsListProject";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      {" "}
      <p className="text-6xl font-paytone-one text-violet-800 p-4">
        Project Page
      </p>
      <div className="w-full flex justify-start pl-24 ">
        <CardsListProject />
      </div>
    </div>
  );
};

export default Projects;
