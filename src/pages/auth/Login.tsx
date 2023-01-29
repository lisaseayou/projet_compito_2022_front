// hooks
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    FieldError,
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { useLazyQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';

// components
import Typography from '../../components/ui/Typography';
import TextField from '../../components/ui/form/TextField';
import Icon from '../../components/ui/Icons/Icon';
import AuthLayout from '../../layout/AuthLayout';
import Form from '../../components/Form/Form';
import FormError from '../../components/Form/FormError';

// utils & helpers
import { handleResetDefault } from '../../utils';
import validation from '../../validation';

// graphql
import { LOGIN } from '../../graphql/query';

// context
import { loginUser } from '../../context/actions/user.action';

// types, interfaces & enums
import {
    AuthLayoutVariantEnum,
    FontSizeEnum,
    IconEnum,
    OpacityEnum,
    RouteEnum,
    TextLineHeightEnum,
    TypographyVariantEnum,
} from '../../enums';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isSubmitted, isValid },
    } = useForm({ mode: 'onChange' });

    const [passwordShown, setPasswordShown] = useState<boolean>(true);
    const [globalErrorMessage, setGlobalFormMessage] = useState('');

    const [login] = useLazyQuery(LOGIN, {
        onCompleted(data) {
            // check if user is login
            document.cookie = 'signedin=true;path=/';
            const { success, ...user } = data.login;
            dispatch(loginUser(user));
            //on veux que sa renvoie dans redux
            //on transmet le user loggé pour la première navigation, pour pouvoir récupérer le username au niveau du App
            //useselector sur profil pour recup les informations
            //usedispach ici pour enregister pour modif state avec reducer

            navigate('/user/home', { replace: true, state: { ...user } });
        },
        onError(error) {
            setGlobalFormMessage(error?.message);
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        login({ variables: data });
    };

    useEffect(() => {
        const subscription = watch(() => {
            setGlobalFormMessage('');
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <AuthLayout
            variant={AuthLayoutVariantEnum.LOGIN}
            title="Se connecter à Compito"
            subtitle="Veuillez vous connecter avec vos informations de connexion."
            secondaryTitle="Hello, friend"
            secondarySubtitle="Entrez vos informations personnelles et commencez votre voyage avec nous"
            secondaryBtnLabel="S'incrire"
            secondaryBtnOnClick={() => navigate(RouteEnum.REGISTER)}
            responsiveLinkLabel="Vous n'êtes pas encore membre. S'incrire."
            responsiveLinkRoute={RouteEnum.REGISTER}
        >
            <Form
                containerClassName="w-full flex flex-col items-center"
                containerStyle={{ maxWidth: 546 }}
                formClassName="flex flex-col items-center w-full"
                buttonSubmitLabel="Se connecter"
                isValid={isValid}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            >
                <FormError
                    isSubmitted={isSubmitted}
                    globalErrorMessage={globalErrorMessage}
                    containerClassName="w-11/12 max-w-sm flex justify-center"
                />

                <TextField
                    control={control}
                    validation={validation.login.email}
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
                    containerClassName="mb-4 w-full max-w-sm"
                    error={errors?.email as FieldError | undefined}
                />

                <TextField
                    control={control}
                    validation={validation.login.password}
                    type={!passwordShown ? 'text' : 'password'}
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
                                passwordShown ? IconEnum.EYE_OFF : IconEnum.EYE
                            }
                            opacity={OpacityEnum.OPACITY_70}
                            onClick={() => setPasswordShown(!passwordShown)}
                        />
                    }
                    containerClassName="mb-4 sm:mb-6 w-full max-w-sm"
                    handlePaste={handleResetDefault}
                    handleCopy={handleResetDefault}
                    error={errors?.password as FieldError | undefined}
                />

                <Link to="/auth/forgot-password" className="hover:underline">
                    <Typography
                        variant={TypographyVariantEnum?.H5}
                        color="text-primary-main"
                        fontSize={FontSizeEnum.SM}
                        leading={TextLineHeightEnum.LINE_HEIGHT_7}
                        className="mb-6 sm:mb-8"
                    >
                        Mot de passe oublié ?
                    </Typography>
                </Link>
            </Form>
        </AuthLayout>
    );
};

export default Login;
