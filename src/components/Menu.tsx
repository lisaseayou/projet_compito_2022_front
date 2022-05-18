import React from "react";

import Home from "../pages/Home";
import Tasks from "../pages/Tasks";

type Menu = {
  path: string;
  title: string;
  Component: React.ComponentType;
};

const MenuList: Menu[] = [
  {
    path: "/",
    title: "Home",
    Component: Home,
  },
  {
    path: "/tasks",
    title: "Tasks",
    Component: Tasks,
  },
];

export default MenuList;
