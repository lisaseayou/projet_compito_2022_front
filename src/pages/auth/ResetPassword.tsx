import { useMutation, useQuery } from '@apollo/client';
import { ChangeEvent, ClipboardEvent, FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Work from '../../assets/work-pressure.svg';
import ImageSplitFullHeight from '../../components/images/ImageSplitFullHeight';
import Button from '../../components/ui/Buttons/Button';
import TextField from '../../components/ui/form/TextField';
import Icon from '../../components/ui/Icons/Icon';
import IconWithBg from '../../components/ui/Icons/IconWithBg';
import Link from '../../components/ui/Link';
import Typography from '../../components/ui/Typography';
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
import { REQUEST_PASSWORD } from '../../graphql/mutation';
import { GET_USER_BY_RESET_TOKEN } from '../../graphql/query';

const ResetPassword = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [formDatas, setFormData] = useState({
        password: '',
        passwordConfirm: '',
    });

    const { data, loading, error } = useQuery(
        GET_USER_BY_RESET_TOKEN,
        {
            variables: { resetToken: params?.resetToken },
        }
    );

    const [passwordShown, setPasswordShown] = useState({
        password: true,
        passwordConfirm: true,
    });

    const [resetPassword] = useMutation(REQUEST_PASSWORD, {
        onCompleted: () => {
            setFormData({
                password: '',
                passwordConfirm: '',
            });

            navigate('/auth/reset-password-confirm');
        },
    });

    const handleCopy = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        return false;
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        return false;
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formDatas, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        console.log(data);
        e.preventDefault();
        resetPassword({
            variables: {
                email: data?.userByResetToken?.email,
                resetToken: data?.userByResetToken?.resetToken,
                password: formDatas.password,
                passwordConfirm: formDatas.passwordConfirm,
            },
        });
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
                        Définissez votre nouveau mot de passe
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum?.H5}
                        color="text-primary-main"
                        fontSize={FontSizeEnum.BASE}
                        fontWeight={FontWeightEnum.NORMAL}
                        textTransform={TextTransformEnum.NORMAL}
                        className="w-full mt-6"
                    >
                        Votre nouveau mot de passe doit être différent que les
                        mots de passe utilisé précédemment.
                    </Typography>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center w-full mx-auto mt-8 mb-0 space-y-4"
                    style={{ maxWidth: 546 }}
                >
                    <TextField
                        type={!passwordShown.password ? 'text' : 'password'}
                        name="password"
                        id="password"
                        placeholder="Mot de passe"
                        icon={
                            <Icon
                                variant={IconEnum.LOCK_CLOSED}
                                opacity={OpacityEnum.OPACITY_70}
                            />
                        }
                        iconShow={
                            <Icon
                                variant={
                                    passwordShown.password
                                        ? IconEnum.EYE_OFF
                                        : IconEnum.EYE
                                }
                                opacity={OpacityEnum.OPACITY_70}
                                onClick={() =>
                                    setPasswordShown({
                                        ...passwordShown,
                                        password: !passwordShown.password,
                                    })
                                }
                            />
                        }
                        className="mb-0 sm:mb-0 mt-0 w-full max-w-sm"
                        value={formDatas?.password}
                        handleChange={handleChange}
                        handlePaste={handlePaste}
                        handleCopy={handleCopy}
                    />

                    <TextField
                        type={
                            !passwordShown.passwordConfirm
                                ? 'text'
                                : 'password'
                        }
                        name="passwordConfirm"
                        id="passwordConfirm"
                        placeholder="Confirmation de mot de passe"
                        icon={
                            <Icon
                                variant={IconEnum.LOCK_CLOSED}
                                opacity={OpacityEnum.OPACITY_70}
                            />
                        }
                        iconShow={
                            <Icon
                                variant={
                                    passwordShown.passwordConfirm
                                        ? IconEnum.EYE_OFF
                                        : IconEnum.EYE
                                }
                                opacity={OpacityEnum.OPACITY_70}
                                onClick={() =>
                                    setPasswordShown({
                                        ...passwordShown,
                                        passwordConfirm:
                                            !passwordShown.passwordConfirm,
                                    })
                                }
                            />
                        }
                        className="mb-4 sm:mb-4 mt-0 w-full max-w-sm"
                        value={formDatas?.passwordConfirm}
                        handleChange={handleChange}
                        handlePaste={handlePaste}
                        handleCopy={handleCopy}
                    />

                    <Button
                        variant={ButtonVariantEnum.FORM}
                        className="w-full max-w-sm"
                    >
                        Changer le mot de passe
                    </Button>
                </form>

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

export default ResetPassword;
