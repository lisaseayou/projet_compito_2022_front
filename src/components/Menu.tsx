import React from 'react';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import Projects from '../pages/Projects';
import Dashboard from '../pages/Dashboard';
import Profil from '../pages/Profil';
import ProjectsDetails from '../pages/ProjectsDetails';
import UserHome from '../pages/user/UserHome';
import ForgotPassword from '../pages/auth/ForgotPassword';

// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";

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
    {
        path: '/auth/forgot-password',
        title: 'Forgot password',
        Component: ForgotPassword,
    },
    // {
    //     path: '/user/home',
    //     title: 'welcome',
    //     Component: UserHome,
    // },
    // {
    //   path: "/Login",
    //   title: "Login",
    //   Component: Login,
    // },
    // {
    //   path: "/Register",
    //   title: "Register",
    //   Component: Register,
    // },
];

export default MenuList;
