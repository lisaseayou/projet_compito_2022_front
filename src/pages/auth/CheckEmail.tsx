// @ts-nocheck
// hooks
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// components
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Buttons/Button';
import ForgotPasswordLayout from '../../layout/ForgotPasswordLayout';

// utils & helpers
import { ToastSuccess } from '../../utils/Toast';

// graphql
import { REQUEST_RESET_PASSWORD } from '../../graphql/mutation';

// types, interfaces & enums
import {
    ButtonVariantEnum,
    FontWeightEnum,
    IconEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import { IForgotPassword } from '../../types/User';

// images & icons
import workImg from '../../assets/work-pressure.svg';

const CheckEmail = () => {
    const location = useLocation();

    const [resetPassword] = useMutation<IForgotPassword>(
        REQUEST_RESET_PASSWORD,
        {
            onCompleted: () => {
                ToastSuccess('Un email viens de vous être envoyé');
            },
        }
    );

    return (
        <ForgotPasswordLayout
            imageSplit={workImg}
            icon={IconEnum.MAIL}
            title="Vérifier votre boite mail"
            subtitle={`Le lien pour réinitialer votre mot de passe a été envoyé à l'adresse ${location?.state?.email}`}
        >
            <div className="flex flex-col items-center w-11/12 max-w-sm mx-auto mt-6">
                <Button variant={ButtonVariantEnum.LIGHT}>
                    Ouvrir votre boite mail
                </Button>

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
                                variables: {
                                    email: location?.state?.email,
                                },
                            })
                        }
                        className="text-primary-main font-bold hover:underline"
                    >
                        cliquez ici
                    </button>
                </Typography>
            </div>
        </ForgotPasswordLayout>
    );
};

export default CheckEmail;
