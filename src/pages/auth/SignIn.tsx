import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import {
    faFacebookF,
    faLinkedinIn,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import SocialButton from '../../components/ui/SocialButton';
import ViewIcon from '../../assets/icons/view.svg';
import InputText from '../../components/ui/InputText';

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
                    <InputText
                        type="name"
                        id="name"
                        placeholder="Name"
                        icon={ViewIcon}
                    />
                </div>

                <Button variant="primary">Sign up</Button>
            </div>
        </div>
    );
};

export default SignIn;
