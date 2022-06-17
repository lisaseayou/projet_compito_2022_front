import { useQuery } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../../queries/query";
import CardProject from "./CardProject";


// const liste = [
//   {
//     id: "1",
//     title: "First Project",
//     dateStart: "Wed, 12 Jan",
//     dateEnd: "Thu, 31 Mar",
//     description:
//       "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
//     badges: [{ title: "Illustration" }, { title: "Ux" }],
//   },

//   {
//     id: "2",
//     title: "Second Project",
//     dateStart: "Wed, 12 Jan",
//     dateEnd: "Thu, 31 Mar",
//     description:
//       "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
//     badges: [{ title: "Illustration" }, { title: "Ux" }],
//   },
//   {
//     id: "3",
//     title: "Third Project",
//     dateStart: "Wed, 12 Jan",
//     dateEnd: "Thu, 31 Mar",
//     description:
//       "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
//     badges: [{ title: "Illustration" }, { title: "Ux" }],
//   },
// ];


const CardsList = () => {
  const {loading, error, data} = useQuery(GET_ALL_PROJECTS); 
  console.log(data);
  if (loading) {
    return <p>loading</p>
  } 
  return (
    <div className="flex">
      {data.allProjects.map((project : any) => (
        <CardProject key={project.id} project={project} />
      ))} 
    </div>
  );
};

export default CardsList;
