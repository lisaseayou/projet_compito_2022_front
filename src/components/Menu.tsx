import React from 'react';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import Projects from '../pages/Projects';
import Dashboard from '../pages/Dashboard';
import Profil from '../pages/Profil';
import ProjectsDetails from '../pages/ProjectsDetails';
import UserHome from '../pages/user/UserHome';

// import SignIn from "../pages/auth/SignIn";
// import SignUp from "../pages/auth/SignUp";

type Menu = {
    path: string;
    title: string;
    Component: React.ComponentType;
};

const MenuList: Menu[] = [
    {
        path: '*',
        title: '404',
        Component: NotFound,
    },
    {
        path: '/',
        title: 'Home',
        Component: Home,
    },
    {
        path: '/tasks',
        title: 'Tasks',
        Component: Tasks,
    },
    {
        path: '/projects',
        title: 'Projects',
        Component: Projects,
    },
    {
        path: '/dashboard',
        title: 'Dashboard',
        Component: Dashboard,
    },
    {
        path: '/profil',
        title: 'Profil',
        Component: Profil,
    },
    {
        path: '/project-details/:projectId',
        title: 'Détail du projet',
        Component: ProjectsDetails,
    },
    // {
    //     path: '/user/home',
    //     title: 'welcome',
    //     Component: UserHome,
    // },
    // {
    //   path: "/signin",
    //   title: "signin",
    //   Component: SignIn,
    // },
    // {
    //   path: "/signup",
    //   title: "signup",
    //   Component: SignUp,
    // },
];

export default MenuList;
