// hooks
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import Button from '../components/ui/Buttons/Button';
import Typography from '../components/ui/Typography';

// types, interfaces & enums
import {
    ButtonVariantEnum,
    RouteEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../enums';
import { IUser } from '../types/User';

const Home = () => {
    const navigate = useNavigate();

    const user: IUser = useSelector((state: any) => state.user);

    return (
        <div className="pl-20 pr-5">
            <div
                className={`flex ${
                    user.id ? 'justify-center' : 'justify-between'
                } mt-3 mb-12`}
            >
                <div />
                <Typography
                    variant={TypographyVariantEnum?.H1}
                    color="text-primary-main"
                    fontSize={'text-3xl sm:text-4xl'}
                    textTransform={TextTransformEnum.NORMAL}
                    className="mb-4 sm:mb-0"
                >
                    Home Page
                </Typography>

                {!user.id && (
                    <Button
                        variant={ButtonVariantEnum.CTA}
                        onClick={() => navigate(RouteEnum.LOGIN)}
                    >
                        Se connecter
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Home;
