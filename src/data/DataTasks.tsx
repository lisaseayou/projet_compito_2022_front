// Fausses données pour Tasks//

type Data = {
  id: number;
  name: string;
  subject: string;
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
    priority: "High",
    status: true,
    createDate: "01/01/2021",
    dueDate: "10/01/2021",
  },
  {
    id: 2,
    name: "Pedro Souza",
    subject: "Your application received",
    priority: "Low",
    status: false,
    createDate: "09/01/2021",
    dueDate: "20/01/2021",
  },
];

export default DataTasks;
