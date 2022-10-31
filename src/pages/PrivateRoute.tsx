// hooks
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// utils & helpers
import Cookies from 'js-cookie';

// types, interfaces & enums
import { RouteEnum } from '../enums';
import { IUser } from '../types/User';

interface IProtectedAreaProps {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: IProtectedAreaProps) => {
    const navigate = useNavigate();
    const user: IUser = useSelector((state: any) => state.user);

    useEffect(() => {
        if (!Cookies.get('signedin') && !user.id) {
            navigate(RouteEnum.LOGIN);
        }
    }, [navigate]);

    return children;
};

export default PrivateRoute;
