import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get('signedin')) {
            Cookies.remove('signedin');
            localStorage.removeItem('userLogged');
            navigate('/auth/login');
        }
    }, [navigate]);

    return <></>;
};
export default Logout;
