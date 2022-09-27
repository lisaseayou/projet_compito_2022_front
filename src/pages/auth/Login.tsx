import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import InputText from '../../components/ui/form/TextField';
import SocialButton from '../../components/ui/SocialButton';
import {
    faFacebookF,
    faLinkedinIn,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';

import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../../graphql/query';
import { useDispatch } from 'react-redux'; //appel les actions
import { LOGIN as LOGINAUTH } from '../../context/actions';
import {
    ButtonTypeEnum,
    ButtonVariantEnum,
    FontSizeEnum,
    IconEnum,
    OpacityEnum,
    TextLineHeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Icon from '../../components/ui/Icons/Icon';
import IconWithBg from '../../components/ui/Icons/IconWithBg';
import { handleResetDefault } from '../../utils';

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formDatas, setFormDatas] = useState({
        email: '',
        password: '',
    });

    const [login] = useLazyQuery(LOGIN, {
        onCompleted(data) {
            console.log(data);
            // check if user is login
            document.cookie = 'signedin=true;path=/';
            const { success, ...user } = data.login;
            localStorage.setItem('userLogged', JSON.stringify(user));
            dispatch({ type: LOGINAUTH, payload: user });
            //on veux que sa renvoie dans redux
            //on transmet le user loggé pour la première navigation, pour pouvoir récupérer le username au niveau du App
            //useselector sur profil pour recup les informations
            //usedispach ici pour enregister pour modif state avec reducer
            navigate('/user/home', { replace: true, state: { ...user } });
        },
        onError(error) {
            console.log(error?.message);
        },
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormDatas({ ...formDatas, [e?.target?.name]: e?.target.value });
    };

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        login({ variables: formDatas });
    };

    return (
        <div className="relative grid grid-cols-12 gap-0 min-h-screen text-center">
            <div className="absolute right-2 flex md:hidden justify-end">
                <Link
                    to="/auth/register"
                    className="hover:underline decoration-primary"
                >
                    <Typography
                        variant={TypographyVariantEnum?.P}
                        color="text-primary-main"
                        className="mb-0"
                        fontSize={FontSizeEnum.SM}
                    >
                        Vous n'êtes pas encore membre. S'incrire.
                    </Typography>
                </Link>
            </div>

            <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-center pt-10 px-2">
                <IconWithBg variant={IconEnum.LOCK_CLOSED} />

                <Typography
                    variant={TypographyVariantEnum?.H2}
                    color="text-primary-main"
                    fontSize={'text-3xl sm:text-4xl'}
                    textTransform={TextTransformEnum.NORMAL}
                    className="mb-6 mt-6 sm:mb-12"
                >
                    Se connecter à Compito
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
                    ou utiliser votre adresse email
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
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Mot de passe"
                            icon={
                                <Icon
                                    variant={IconEnum.LOCK_CLOSED}
                                    opacity={OpacityEnum.OPACITY_70}
                                />
                            }
                            className="mb-6 sm:mb-12 w-full max-w-sm"
                            value={formDatas?.password}
                            handleChange={handleChange}
                            handlePaste={handleResetDefault}
                            handleCopy={handleResetDefault}
                        />

                        <Link
                            to="/auth/forgot-password"
                            className="hover:underline"
                        >
                            <Typography
                                variant={TypographyVariantEnum?.H5}
                                color="text-secondary-main"
                                fontSize={FontSizeEnum.LG}
                                leading={TextLineHeightEnum.LINE_HEIGHT_7}
                                className="mb-6 sm:mb-8"
                            >
                                Mot de passe oublié ?
                            </Typography>
                        </Link>

                        <Button
                            type={ButtonTypeEnum?.SUBMIT}
                            variant={ButtonVariantEnum.PRIMARY}
                        >
                            Se connecter
                        </Button>
                    </form>
                </div>
            </div>

            <div className="col-span-5 bg-primary-main hidden md:flex flex-col justify-center items-center p-4">
                <Typography
                    variant={TypographyVariantEnum?.H2}
                    color="text-white"
                    fontSize={'text-3xl sm:text-4xl'}
                    className="mb-10"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    Hello, friend
                </Typography>

                <Typography
                    variant={TypographyVariantEnum?.H5}
                    color="text-white"
                    fontSize={FontSizeEnum.LG}
                    leading={TextLineHeightEnum.LINE_HEIGHT_7}
                    className="mb-14"
                    style={{ width: '85%', maxWidth: 430 }}
                >
                    Entrez vos informations personnelles et commencez votre
                    voyage avec nous
                </Typography>

                <Button
                    variant={ButtonVariantEnum.OUTLINE}
                    onClick={() => navigate('/auth/register')}
                >
                    S'incrire
                </Button>
            </div>
        </div>
    );
};

export default Login;
