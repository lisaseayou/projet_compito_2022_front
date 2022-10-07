import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Buttons/Button';
import Typography from '../components/ui/Typography';
import {
    ButtonVariantEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../enums';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="pl-20 pr-5">
            <div className="flex justify-between mt-3 mb-12">
                <div></div>
                <Typography
                    variant={TypographyVariantEnum?.H1}
                    color="text-primary-main"
                    fontSize={'text-3xl sm:text-4xl'}
                    textTransform={TextTransformEnum.NORMAL}
                    className="mb-4 sm:mb-0"
                >
                    Home Page
                </Typography>
                <Button
                    variant={ButtonVariantEnum.CTA}
                    onClick={() => navigate('/auth/login')}
                >
                    Se connecter
                </Button>
            </div>
        </div>
    );
};

export default Home;
