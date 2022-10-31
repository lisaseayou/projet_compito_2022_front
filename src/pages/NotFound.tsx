// hooks
import { Link } from 'react-router-dom';

// components
import Typography from '../components/ui/Typography';
import Button from '../components/ui/Buttons/Button';

// types, interfaces & enums
import {
    ButtonTypeEnum,
    ButtonVariantEnum,
    FontWeightEnum,
    RouteEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../enums';

// images & icons
import notFoundImage from '../assets/404.svg';

const NotFound = () => {
    return (
        <div className="flex h-screen">
            <div className="m-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 p-10">
                <div>
                    <img src={notFoundImage} alt="404-error" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Typography
                        variant={TypographyVariantEnum?.P}
                        color="text-primary-main"
                        fontSize="text-5xl sm:text-6xl"
                        fontWeight={FontWeightEnum.BOLD}
                        textTransform={TextTransformEnum.UPPERCASE}
                        className="mb-4 text-center w-full"
                    >
                        Oh non !!!
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum?.P}
                        color="text-primary-main"
                        fontSize="text-5xl sm:text-6xl"
                        fontWeight={FontWeightEnum.BOLD}
                        textTransform={TextTransformEnum.UPPERCASE}
                        className="mb-10 text-center w-full"
                    >
                        Error 404
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum?.P}
                        color="text-primary-main"
                        fontSize="text-md sm:text-xl"
                        className="text-center w-full"
                    >
                        Nous n'arrivons pas à trouver la page que vous
                        recherchez.
                    </Typography>

                    <Link className="mt-10" to={RouteEnum.USER_HOME}>
                        <Button
                            type={ButtonTypeEnum?.SUBMIT}
                            variant={ButtonVariantEnum.PRIMARY}
                        >
                            Go to home page
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
