import React from "react";

import NotFound from "../pages/NotFound"
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import Projects from "../pages/Projects";
import Dashboard from "../pages/Dashboard";
import Profil from "../pages/Profil";
import ProjectsDetails from "../pages/ProjectsDetails"; 
type Menu = {
  path: string;
  title: string;
  Component: React.ComponentType;
};

const MenuList: Menu[] = [
  {
    path: "*",
    title: "404",
    Component: NotFound,
  },
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
  {
    path:"/project-details/:projectId",
    title: "Détail du projet",
    Component: ProjectsDetails, 
  }
];

export default MenuList;
