import Button from '../components/ui/Buttons/Button';
import { ButtonTypeEnum, ButtonVariantEnum } from '../enums';

const NotFound = () => {
    return (
        <div className="flex h-screen">
            <div className="m-auto grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 p-10">
                <div>
                    <img src="./assets/images/404.svg" alt="404-error" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-6xl font-bold uppercase text-sky-600">
                        Oh no !!!
                    </p>
                    <p className="text-6xl font-bold uppercase text-sky-600">
                        Error 404
                    </p>
                    <p className="mt-10 text-xl text-sky-500">
                        we can't seem to find the page your looking for
                    </p>
                    <a className="mt-10" href="/">
                        <Button
                            type={ButtonTypeEnum?.SUBMIT}
                            variant={ButtonVariantEnum.PRIMARY}
                        >
                            Go to home page
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
