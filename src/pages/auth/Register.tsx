import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Buttons/Button';
import Typography from '../../components/ui/Typography';
import InputText from '../../components/ui/form/TextField';
import SocialButton from '../../components/ui/SocialButton';
import {
    faFacebookF,
    faLinkedinIn,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { REGISTER } from '../../graphql/mutation';
import {
    ButtonTypeEnum,
    ButtonVariantEnum,
    FontSizeEnum,
    IconEnum,
    OpacityEnum,
    RoleEnum,
    TextLineHeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Icon from '../../components/ui/Icons/Icon';
import { handleResetDefault } from '../../utils';

const Register = () => {
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        roles: [RoleEnum.ADMIN],
    });

    const [passwordShown, setPasswordShown] = useState({
        password: true,
        passwordConfirm: true,
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormDatas({ ...formDatas, [e?.target?.name]: e?.target.value });
    };

    const [register] = useMutation(REGISTER, {
        onCompleted: (data) => {
            // create the cookie of login
            document.cookie = 'signedin=true;path=/';

            // save the user's datas in local storage
            const { success, ...user } = data.register;
            localStorage.setItem('userLogged', JSON.stringify(user));

            setFormDatas({
                name: '',
                email: '',
                password: '',
                passwordConfirm: '',
                roles: [RoleEnum.ADMIN],
            });

            navigate('/user/home', { replace: true, state: { ...user } });
        },
        onError: (error) => {
            console.log(error?.message);
        },
    });

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        register({ variables: { data: formDatas } });
    };

    return (
        <div className="relative grid grid-cols-12 gap-0 min-h-screen text-center">
            <div className="col-span-5 bg-primary-main hidden md:flex flex-col justify-center items-center p-4 py-10">
                <Typography
                    variant={TypographyVariantEnum?.H2}
                    color="text-white"
                    fontSize={'text-3xl sm:text-4xl'}
                    className="mb-10"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    Welcome Back
                </Typography>

                <Typography
                    variant={TypographyVariantEnum?.H5}
                    color="text-white"
                    fontSize={FontSizeEnum.LG}
                    leading={TextLineHeightEnum.LINE_HEIGHT_7}
                    className="mb-14"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    Pour rester connecté, veuillez vous connecter avec vos
                    informations de connexion.
                </Typography>

                <Button
                    variant={ButtonVariantEnum.OUTLINE}
                    onClick={() => navigate('/auth/login')}
                >
                    Se connecter
                </Button>
            </div>

            <div className="absolute right-2 flex md:hidden justify-end">
                <Link
                    to="/auth/login"
                    className="hover:underline decoration-primary"
                >
                    <Typography
                        variant={TypographyVariantEnum?.P}
                        color="text-primary-main"
                        className="mb-0"
                        fontSize={FontSizeEnum.SM}
                    >
                        Déjà membre. Se connecter.
                    </Typography>
                </Link>
            </div>

            <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-center pt-20 pb-10 sm:py-10 px-4">
                <Typography
                    variant={TypographyVariantEnum?.H2}
                    color="text-primary-main"
                    fontSize={'text-3xl sm:text-4xl'}
                    textTransform={TextTransformEnum.NORMAL}
                    className="mb-6 sm:mb-12"
                >
                    Créer un compte
                </Typography>

                <div className="flex gap-4 mb-4 sm:mb-6">
                    <SocialButton icon={faFacebookF} />
                    <SocialButton icon={faLinkedinIn} />
                    <SocialButton icon={faGoogle} />
                </div>

                <Typography
                    variant={TypographyVariantEnum?.H5}
                    color="text-primary-main"
                    fontSize={FontSizeEnum.LG}
                    leading={TextLineHeightEnum.LINE_HEIGHT_7}
                    className="mb-6 sm:mb-8"
                >
                    ou utiliser votre adresse email pour vous inscrire.
                </Typography>

                <div
                    className="w-full flex justify-center"
                    style={{ maxWidth: 546 }}
                >
                    <form
                        className="flex flex-col items-center w-full"
                        onSubmit={handleSubmit}
                    >
                        <InputText
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nom"
                            icon={
                                <Icon
                                    variant={IconEnum.USER}
                                    opacity={OpacityEnum.OPACITY_70}
                                />
                            }
                            className="mb-4 w-full max-w-sm"
                            value={formDatas?.name}
                            handleChange={handleChange}
                        />

                        <InputText
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
                            className="mb-4 w-full max-w-sm"
                            value={formDatas?.email}
                            handleChange={handleChange}
                        />

                        <InputText
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
                            className="mb-4 w-full max-w-sm"
                            value={formDatas?.password}
                            handleChange={handleChange}
                            handlePaste={handleResetDefault}
                            handleCopy={handleResetDefault}
                        />

                        <InputText
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
                            className="mb-6 sm:mb-8 w-full max-w-sm"
                            value={formDatas?.passwordConfirm}
                            handleChange={handleChange}
                            handlePaste={handleResetDefault}
                            handleCopy={handleResetDefault}
                        />

                        <Button
                            type={ButtonTypeEnum?.SUBMIT}
                            variant={ButtonVariantEnum.PRIMARY}
                        >
                            S'incrire
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
