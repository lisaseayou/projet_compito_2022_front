import Card from "../components/Card";
import CardsList from "../components/CardsList";

const Projects = () => {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full ">
        {" "}
        <p className="text-6xl font-paytone-one text-violet-800 p-4">Project Page</p>
        <div className="w-full flex justify-start pl-24 ">
 <CardsList />
        </div>
        
      </div>
    );
  };
  
  export default Projects;
  