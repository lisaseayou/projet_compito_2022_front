import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

interface IProtectedAreaProps {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: IProtectedAreaProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Cookies.get('signedin')) {
            navigate('/auth/login');
        }
    }, [navigate]);

    return children;
};

export default PrivateRoute;
