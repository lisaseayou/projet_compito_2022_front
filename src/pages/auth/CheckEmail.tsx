// @ts-nocheck
import { useLocation } from 'react-router-dom';
import Typography from '../../components/ui/Typography';
import Work from '../../assets/work-pressure.svg';
import Button from '../../components/ui/Buttons/Button';
import { REQUEST_RESET_PASSWORD } from '../../graphql/mutation';
import { ToastSuccess } from '../../utils/Toast';
import { useMutation } from '@apollo/client';
import {
    ButtonVariantEnum,
    FontWeightEnum,
    IconEnum,
    LinkVariantEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Link from '../../components/ui/Link';
import IconWithBg from '../../components/ui/Icons/IconWithBg';
import ImageSplitFullHeight from '../../components/images/ImageSplitFullHeight';

const CheckEmail = () => {
    const location = useLocation();

    const [resetPassword] = useMutation(REQUEST_RESET_PASSWORD, {
        onCompleted: () => {
            ToastSuccess('Un email viens de vous être envoyé');
        },
    });

    return (
        <section className="relative flex flex-wrap md:items-center w-full min-h-screen">
            <div className="flex flex-col justify-center w-full md:w-3/5 lg:w-1/2 text-center px-4 sm:pl-8">
                <div className="max-w-lg mx-auto text-center">
                    <IconWithBg variant={IconEnum.MAIL} />

                    <Typography
                        variant={TypographyVariantEnum?.H1}
                        color="text-primary-main"
                        fontSize={'text-3xl sm:text-4xl'}
                        fontWeight={FontWeightEnum.BOLD}
                        textTransform={TextTransformEnum.NORMAL}
                        className="w-full mt-6 mb-6 sm:mb-6"
                    >
                        Vérifier votre boite mail
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum?.H5}
                        color="text-primary-main"
                        fontSize="text-md"
                        fontWeight={FontWeightEnum.NORMAL}
                        textTransform={TextTransformEnum.NORMAL}
                        className="my-4 mb-8 w-full max-w-xs mx-auto"
                    >
                        Le lien pour réinitialer votre mot de passe a été envoyé
                        à l'adresse {location?.state?.email}
                    </Typography>

                    <Button variant={ButtonVariantEnum.LIGHT}>
                        Ouvrir votre boite mail
                    </Button>
                </div>

                <Typography
                    variant={TypographyVariantEnum?.H6}
                    color="text-primary-main"
                    fontSize="text-xs"
                    fontWeight={FontWeightEnum.BOLD}
                    textTransform={TextTransformEnum.NORMAL}
                    className="w-full mt-6"
                >
                    Vous n'avez pas reçu de mail ?{' '}
                    <button
                        onClick={() =>
                            resetPassword({
                                variables: { email: location?.state?.email },
                            })
                        }
                        className="text-primary-main font-bold hover:underline"
                    >
                        cliquez ici
                    </button>
                </Typography>

                <Link
                    variant={LinkVariantEnum.BACK}
                    to="/auth/login"
                    label="Revenir à la connexion"
                    classNameBack="mb-24"
                />
            </div>

            <ImageSplitFullHeight
                src={Work}
                classNameContainer="hidden md:flex"
            />
        </section>
    );
};

export default CheckEmail;
