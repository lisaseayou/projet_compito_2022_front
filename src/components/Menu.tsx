// react
import { ComponentType } from 'react';

// components
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import Projects from '../pages/Projects';
import Dashboard from '../pages/Dashboard';
import Profil from '../pages/Profil';
import ProjectsDetails from '../pages/ProjectsDetails';
import UserHome from '../pages/user/UserHome';
import ForgotPassword from '../pages/auth/ForgotPassword';
import CheckEmail from '../pages/auth/CheckEmail';
import ResetPassword from '../pages/auth/ResetPassword';
import ResetPasswordConfirm from '../pages/auth/ResetPasswordConfirm';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import AddProject from '../pages/AddProject';
import AddTask from '../pages/AddTask';
import Logout from '../pages/auth/Logout';

// types, interfaces & enums
import { RouteEnum } from '../enums';

export interface Menu {
    path: RouteEnum | string;
    title: string;
    Component: ComponentType;
}

export const MenuList: Menu[] = [
    {
        path: RouteEnum.NOT_FOUND,
        title: '404',
        Component: NotFound,
    },
    {
        path: RouteEnum.HOME,
        title: 'Home',
        Component: Home,
    },
];

export const MenuListAuth: Menu[] = [
    {
        path: RouteEnum.LOGIN,
        title: 'Login',
        Component: Login,
    },
    {
        path: RouteEnum.REGISTER,
        title: 'Register',
        Component: Register,
    },
    {
        path: RouteEnum.FORGOT_PASSWORD,
        title: 'Forgot password',
        Component: ForgotPassword,
    },
    {
        path: RouteEnum.CHECK_EMAIL,
        title: 'Check elementmail',
        Component: CheckEmail,
    },
    {
        path: RouteEnum.RESET_PASSWORD,
        title: 'Reset password',
        Component: ResetPassword,
    },
    {
        path: RouteEnum.RESET_PASSWORD_CONFIRM,
        title: 'Reset password confirm',
        Component: ResetPasswordConfirm,
    },
];

export const MenuListProtected: Menu[] = [
    {
        path: RouteEnum.USER_HOME,
        title: 'welcome',
        Component: UserHome,
    },
    {
        path: RouteEnum.PROJECTS,
        title: 'Projects',
        Component: Projects,
    },
    {
        path: RouteEnum.ADD_PROJECT,
        title: 'add project',
        Component: AddProject,
    },
    {
        path: `${RouteEnum.PROJECT_DETAILS}/:projectId`,
        title: 'Détail du projet',
        Component: ProjectsDetails,
    },
    {
        path: RouteEnum.TASKS,
        title: 'Tasks',
        Component: Tasks,
    },
    {
        path: RouteEnum.ADD_TASK,
        title: 'Add Tasks',
        Component: AddTask,
    },
    {
        path: RouteEnum.DASHBOARD,
        title: 'Dashboard',
        Component: Dashboard,
    },
    {
        path: RouteEnum.PROFIL,
        title: 'Profil',
        Component: Profil,
    },
    {
        path: RouteEnum.LOGOUT,
        title: 'Logout',
        Component: Logout,
    },
];
