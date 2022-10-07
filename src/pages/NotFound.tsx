import Button from '../components/ui/Buttons/Button';
import { ButtonTypeEnum, ButtonVariantEnum } from '../enums';
import notFoundImage from '../assets/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex h-screen">
            <div className="m-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 p-10">
                <div>
                    <img src={notFoundImage} alt="404-error" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-6xl font-bold uppercase text-sky-600">
                        Oh non !!!
                    </p>
                    <p className="text-6xl font-bold uppercase text-sky-600">
                        Error 404
                    </p>
                    <p className="mt-10 text-xl text-sky-500">
                        Nous n'arrivons pas à trouver la page que vous
                        recherchez.
                    </p>
                    <Link className="mt-10" to="/user/home">
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
