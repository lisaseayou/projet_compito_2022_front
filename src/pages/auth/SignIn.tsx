import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button, { ButtonTypeEnum } from '../../components/ui/Button';
import Typography, { variantEnum } from '../../components/ui/Typography';
import InputText from '../../components/ui/InputText';
import SocialButton from '../../components/ui/SocialButton';
import {
    faFacebookF,
    faLinkedinIn,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as ViewIcon } from '../../assets/icons/view.svg';
import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../../queries/query';

const SignIn = () => {
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        email: '',
        password: '',
    });

    const [login] = useLazyQuery(LOGIN, {
        onCompleted(data) {
            // check if user is login
            document.cookie = 'signedin=true;path=/';
            const { success, ...user } = data.login;

            localStorage.setItem('userLogged', JSON.stringify(user));

            // on transmet le user loggé pour la première navigation, pour pouvoir récupérer le username au niveau du App
            navigate('/', { replace: true, state: { ...user } });
        },
        onError(error) {
            console.log(error?.message);
        },
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormDatas({ ...formDatas, [e?.target?.name]: e?.target.value });
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        login({ variables: formDatas });
    };

    return (
        <div className="grid grid-cols-12 gap-0 min-h-screen text-center">
            <div className="col-span-12 flex md:hidden justify-end">
                <Link
                    to="/auth/register"
                    className="hover:underline decoration-primary"
                >
                    <Typography
                        variant={variantEnum?.P}
                        color="text-primary-main"
                        className="mb-0"
                    >
                        Not a member? Sign up now
                    </Typography>
                </Link>
            </div>

            <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-center p-4">
                <Typography
                    variant={variantEnum?.H2}
                    color="text-primary-main"
                    fontSize="text-6xl"
                    className="mb-12"
                >
                    Sign in to Compito
                </Typography>

                <div className="flex gap-5 mb-14">
                    <SocialButton icon={faFacebookF} />
                    <SocialButton icon={faLinkedinIn} />
                    <SocialButton icon={faGoogle} />
                </div>

                <Typography
                    variant={variantEnum?.H5}
                    color="text-secondary-main"
                    fontSize="text-2xl"
                    leading="leading-7"
                    className="mb-12"
                >
                    or use your email account
                </Typography>

                <div
                    className="w-full flex justify-center"
                    style={{ maxWidth: 546 }}
                >
                    <form className="w-full" onSubmit={handleSubmit}>
                        <InputText
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            icon={<ViewIcon className="h-6 w-6" />}
                            className="mb-4"
                            value={formDatas?.email}
                            handleChange={handleChange}
                        />

                        <InputText
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Password"
                            icon={<ViewIcon className="h-6 w-6" />}
                            className="mb-12"
                            value={formDatas?.password}
                            handleChange={handleChange}
                        />

                        <Link to="/">
                            <Typography
                                variant={variantEnum?.H5}
                                color="text-secondary-main"
                                fontSize="text-2xl"
                                leading="leading-7"
                                className="mb-12"
                            >
                                Forgot your password ?
                            </Typography>
                        </Link>

                        <Button type={ButtonTypeEnum?.SUBMIT} variant="primary">
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>

            <div className="col-span-5 bg-primary-main hidden md:flex flex-col justify-center items-center p-4">
                <Typography
                    variant={variantEnum?.H2}
                    color="text-white"
                    fontSize="text-6xl"
                    className="mb-12"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    Hello, friend
                </Typography>

                <Typography
                    variant={variantEnum?.H5}
                    color="text-white"
                    fontSize="text-2xl"
                    leading="leading-7"
                    className="mb-16"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    Enter your personnal details and start journey with us
                </Typography>

                <Button
                    variant="outline"
                    onClick={() => navigate('/auth/register')}
                >
                    Sign up
                </Button>
            </div>
        </div>
    );
};

export default SignIn;
