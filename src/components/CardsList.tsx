import Card from "./Card";

const liste = [
  {
    title: "First Task",
    dateStart: "Wed, 12 Jan",
    dateEnd: "Thu, 31 Mar",
    description:
      "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
    badges: [{ title: "Illustration" }, { title: "Ux" }],
  },

  {
    title: "Second Task",
    dateStart: "Wed, 12 Jan",
    dateEnd: "Thu, 31 Mar",
    description:
      "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
    badges: [{ title: "Illustration" }, { title: "Ux" }],
  },
  {
    title: "Third Task",
    dateStart: "Wed, 12 Jan",
    dateEnd: "Thu, 31 Mar",
    description:
      "Caramels fruitcake cupcake tart apple pie jujubes tootsie roll jujubes candy. Sugar plum apple pie tiramisu gummies donut marzipan tart candy. Powder biscuit candy cookie oat cake. Brownie tart sugar plum candy jelly-o candy cheesecake.",
    badges: [{ title: "Illustration" }, { title: "Ux" }],
  },
];

const CardsList = () => {
  return <div className="flex">
      {liste.map((card, index) =>
    <Card key={index} card={card} />
      )}
  </div>;
};

export default CardsList;
