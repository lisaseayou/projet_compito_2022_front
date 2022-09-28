import { useNavigate } from 'react-router-dom';
import TextField from '../../components/ui/form/TextField';
import Typography from '../../components/ui/Typography';
import Work from '../../assets/work-pressure.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { REQUEST_RESET_PASSWORD } from '../../graphql/mutation';
import Link from '../../components/ui/Link';
import {
    ButtonVariantEnum,
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    LinkVariantEnum,
    OpacityEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Button from '../../components/ui/Buttons/Button';
import IconWithBg from '../../components/ui/Icons/IconWithBg';
import ImageSplitFullHeight from '../../components/images/ImageSplitFullHeight';
import Icon from '../../components/ui/Icons/Icon';
import { OnSubmitFormType } from '../../types';
import { ForgotPasswordVariables, IForgotPassword } from '../../types/User';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ForgotPasswordVariables>({
        email: '',
    });

    const [resetPassword] = useMutation<IForgotPassword>(
        REQUEST_RESET_PASSWORD,
        {
            onCompleted: () => {
                setFormData({
                    email: '',
                });

                navigate('/auth/check-email', {
                    state: { email: formData.email },
                });
            },
        }
    );

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit: OnSubmitFormType = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetPassword({ variables: { email: formData.email } });
    };

    return (
        <section className="relative flex flex-wrap md:items-center w-full min-h-screen">
            <div className="flex flex-col justify-center w-full md:w-3/5 lg:w-1/2 text-center px-4 sm:pl-8">
                <div className="max-w-lg mx-auto text-center">
                    <IconWithBg variant={IconEnum.LOCK_CLOSED} />

                    <Typography
                        variant={TypographyVariantEnum?.H1}
                        color="text-primary-main"
                        fontSize={'text-3xl sm:text-4xl'}
                        fontWeight={FontWeightEnum.BOLD}
                        textTransform={TextTransformEnum.NORMAL}
                        className="w-full mt-6 mb-6 sm:mb-6"
                    >
                        Mot de passe oublié ?
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum?.H5}
                        color="text-primary-main"
                        fontSize={FontSizeEnum.BASE}
                        fontWeight={FontWeightEnum.NORMAL}
                        textTransform={TextTransformEnum.NORMAL}
                        className="w-full mt-6"
                    >
                        Pas de soucis, vous allez recevoir les instructions par
                        email.
                    </Typography>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center w-full mx-auto mt-8 mb-0"
                    style={{ maxWidth: 546 }}
                >
                    <TextField
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Adresse email"
                        icon={
                            <Icon
                                variant={IconEnum.MAIL}
                                opacity={OpacityEnum.OPACITY_70}
                            />
                        }
                        className="mb-2 w-full max-w-sm"
                        value={formData?.email}
                        handleChange={handleChange}
                    />

                    <Button
                        variant={ButtonVariantEnum.FORM}
                        className="w-full max-w-sm"
                    >
                        Envoyer
                    </Button>
                </form>

                <Link
                    variant={LinkVariantEnum.BACK}
                    to="/auth/login"
                    label="Revenir à la connexion"
                    classNameBack="mb-4"
                />
            </div>

            <ImageSplitFullHeight
                src={Work}
                classNameContainer="hidden md:flex"
            />
        </section>
    );
};

export default ForgotPassword;
