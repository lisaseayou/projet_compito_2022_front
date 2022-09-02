import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
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
import { REGISTER } from '../../queries/mutation';

const SignUp = () => {
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        name: '',
        email: '',
        password: '',
        roles: ['admin'],
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormDatas({ ...formDatas, [e?.target?.name]: e?.target.value });
    };

    const [register] = useMutation(REGISTER, {
        onCompleted: (data) => {
            // create the cookie of login
            document.cookie = 'signedin=true;path=/';

            // save the user's datas in local storage
            const { success, ...user } = data.register;
            localStorage.setItem('userLogged', JSON.stringify(user));

            setFormDatas({
                name: '',
                email: '',
                password: '',
                roles: ['admin'],
            });

            navigate('/user/home', { replace: true, state: { ...user } });
        },
        onError: (error) => {
            console.log(error?.message);
        },
    });

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        register({ variables: { data: formDatas } });
    };

    return (
        <div className="grid grid-cols-12 gap-0 min-h-screen text-center">
            <div className="col-span-5 bg-primary-main hidden md:flex flex-col justify-center items-center p-4">
                <Typography
                    variant={variantEnum?.H2}
                    color="text-white"
                    fontSize="text-6xl"
                    className="mb-12"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    Welcome Back
                </Typography>

                <Typography
                    variant={variantEnum?.H5}
                    color="text-white"
                    fontSize="text-2xl"
                    leading="leading-7"
                    className="mb-16"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    To keep connected with us please login with your personnal
                    info
                </Typography>

                <Button
                    variant="outline"
                    onClick={() => navigate('/auth/login')}
                >
                    Sign in
                </Button>
            </div>

            <div className="col-span-12 flex md:hidden justify-end">
                <Link
                    to="/auth/login"
                    className="hover:underline decoration-primary"
                >
                    <Typography
                        variant={variantEnum?.P}
                        color="text-primary-main"
                        className="mb-0"
                    >
                        Already a member? Sign In
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
                    Create account
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
                    or use your email for registration
                </Typography>

                <div
                    className="w-full flex justify-center"
                    style={{ maxWidth: 546 }}
                >
                    <form className="w-full" onSubmit={handleSubmit}>
                        <InputText
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            icon={<ViewIcon className="h-6 w-6" />}
                            className="mb-4"
                            value={formDatas?.name}
                            handleChange={handleChange}
                        />

                        <InputText
                            type="text"
                            name="email"
                            id="email"
                            placeholder="email"
                            icon={<ViewIcon className="h-6 w-6" />}
                            className="mb-4"
                            value={formDatas?.email}
                            handleChange={handleChange}
                        />

                        <InputText
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            icon={<ViewIcon className="h-6 w-6" />}
                            className="mb-12"
                            value={formDatas?.password}
                            handleChange={handleChange}
                        />

                        <Button type={ButtonTypeEnum?.SUBMIT} variant="primary">
                            Sign up
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
