// hooks
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// utils & helpers
import Cookies from 'js-cookie';
import { logoutUser } from '../../context/actions/user.action';

// types, interfaces & enums
import { RouteEnum } from '../../enums';
import { IUser } from '../../types/User';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user: IUser = useSelector((state: any) => state.user);

    useEffect(() => {
        if (Cookies.get('signedin') || user.id) {
            Cookies.remove('signedin');

            dispatch(logoutUser);
            navigate(RouteEnum.LOGIN);
        }
    }, [navigate]);

    return <></>;
};
export default Logout;
