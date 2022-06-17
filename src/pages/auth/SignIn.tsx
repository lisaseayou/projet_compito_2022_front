import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import InputText from '../../components/ui/InputText';
import SocialButton from '../../components/ui/SocialButton';
import {
    faFacebookF,
    faLinkedinIn,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as ViewIcon } from '../../assets/icons/view.svg';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="grid grid-cols-12 gap-0 min-h-screen text-center p-4">
            <div className="col-span-5 bg-primary-main hidden md:flex flex-col justify-center items-center">
                <Typography
                    variant="h2"
                    color="text-white"
                    fontSize="text-6xl"
                    className="mb-12"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    Welcome Back
                </Typography>

                <Typography
                    variant="h5"
                    color="text-white"
                    fontSize="text-2xl"
                    leading="leading-7"
                    className="mb-16"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    To keep connected with us please login with your personnal
                    info
                </Typography>

                <Button variant="outline">Sign in</Button>
            </div>

            <div className="col-span-12 flex md:hidden justify-end">
                <Link to="/" className="hover:underline decoration-primary">
                    <Typography
                        variant="p"
                        color="text-primary-main"
                        className="mb-0"
                    >
                        Not a member? Sign in now
                    </Typography>
                </Link>
            </div>

            <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-center p-4">
                <Typography
                    variant="h2"
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
                    variant="h5"
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
                    <form className="w-full" onSubmit={() => {}}>
                        <InputText
                            type="name"
                            id="name"
                            placeholder="Name"
                            icon={<ViewIcon className="h-6 w-6" />}
                            className="mb-4"
                        />

                        <InputText
                            type="email"
                            id="email"
                            placeholder="email"
                            icon={<ViewIcon className="h-6 w-6" />}
                            className="mb-4"
                        />

                        <InputText
                            type="password"
                            id="password"
                            placeholder="password"
                            icon={<ViewIcon className="h-6 w-6" />}
                            className="mb-12"
                        />

                        <Button variant="primary">Sign up</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
