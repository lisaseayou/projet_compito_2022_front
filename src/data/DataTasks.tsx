// Fausses données pour Tasks//

type Data = {
  id: number;
  name: string;
  subject: string;
  description: string;
  priority: string;
  status: boolean;
  createDate: string;
  dueDate: string;
};

const DataTasks: Data[] = [
  {
    id: 1,
    name: "John Doe",
    subject: "Support of theme",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat adipisci ullam commodi nemo quisquam. Non, temporibus, atque doloribus natus expedita eaque ab magnam labore architecto similique laudantium laborum. Incidunt.",
    priority: "High",
    status: true,
    createDate: "01/01/2021",
    dueDate: "10/01/2021",
  },
  {
    id: 2,
    name: "Pedro Souza",
    subject: "Your application received",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis rerum laboriosam odio quasi odit dolor! Quos, quisquam inventore quasi neque architecto fugit, eligendi provident cumque sint deleniti dolorum explicabo deserunt!",
    priority: "Low",
    status: false,
    createDate: "09/01/2021",
    dueDate: "20/01/2021",
  },
];

export default DataTasks;
