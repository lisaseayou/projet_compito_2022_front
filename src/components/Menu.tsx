import React from "react";

import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Projects from "../pages/Projects";
import Dashboard from "../pages/Dashboard";
import Profil from "../pages/Profil";

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
  {
    path: "/projects",
    title: "Projects",
    Component: Projects,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    Component: Dashboard,
  },
  {
    path: "/profil",
    title: "Profil",
    Component: Profil,
  },
];

export default MenuList;
