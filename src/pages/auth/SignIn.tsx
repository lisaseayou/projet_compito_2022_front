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

const SignIn = () => {
    return (
        <div className="grid grid-cols-12 gap-0 min-h-screen text-center">
            <div className="col-span-5 bg-primary-main flex flex-col justify-center items-center">
                <Typography
                    variant="h2"
                    color="text-white"
                    fontSize="text-6xl"
                    className="mb-12"
                    style={{ maxWidth: 430 }}
                >
                    Welcome Back
                </Typography>

                <Typography
                    variant="h5"
                    color="text-white"
                    fontSize="text-2xl"
                    leading="leading-7"
                    className="mb-16"
                    style={{ maxWidth: 430 }}
                >
                    To keep connected with us please login with your personnal
                    info
                </Typography>

                <Button variant="outline">Sign in</Button>
            </div>
            <div className="col-span-7 flex flex-col justify-center items-center">
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

                <div className="w-full" style={{ maxWidth: 546 }}>
                    <form onSubmit={() => {}}>
                        <InputText
                            type="name"
                            id="name"
                            placeholder="Name"
                            icon={<ViewIcon />}
                            className="mb-4"
                        />

                        <InputText
                            type="email"
                            id="email"
                            placeholder="email"
                            icon={<ViewIcon />}
                            className="mb-4"
                        />

                        <InputText
                            type="password"
                            id="password"
                            placeholder="password"
                            icon={<ViewIcon />}
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
