import CardProject from "./CardProject";

const liste = [
  {
    title: "First Project",
    dateStart: "Wed, 12 Jan",
    dateEnd: "Thu, 31 Mar",
    description:
      "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
    badges: [{ title: "Illustration" }, { title: "Ux" }],
  },

  {
    title: "Second Project",
    dateStart: "Wed, 12 Jan",
    dateEnd: "Thu, 31 Mar",
    description:
      "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
    badges: [{ title: "Illustration" }, { title: "Ux" }],
  },
  {
    title: "Third Project",
    dateStart: "Wed, 12 Jan",
    dateEnd: "Thu, 31 Mar",
    description:
      "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
    badges: [{ title: "Illustration" }, { title: "Ux" }],
  },
];

const CardsList = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
    <div className="w-full flex justify-start pl-24 ">
      {liste.map((project, index) => (
        <CardProject key={index} project={project} />
      ))}
    </div>
    </div>
  );
};

export default CardsList;
