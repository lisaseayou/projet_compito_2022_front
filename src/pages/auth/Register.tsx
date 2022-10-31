// hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// components
import TextField from '../../components/ui/form/TextField';
import Icon from '../../components/ui/Icons/Icon';
import AuthLayout from '../../layout/AuthLayout';
import FormError from '../../components/Form/FormError';
import Form from '../../components/Form/Form';

// utils & helpers
import { handleResetDefault } from '../../utils';
import validation from '../../validation';

// context
import { loginUser } from '../../context/actions/user.action';

// graphql
import { REGISTER } from '../../graphql/mutation';

// types, interfaces & enums
import { IPasswordShown } from '../../types';
import { IRegisterUser } from '../../types/User';
import {
    AuthLayoutVariantEnum,
    IconEnum,
    OpacityEnum,
    RoleEnum,
    RouteEnum,
} from '../../enums';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isSubmitted, isValid },
    } = useForm({ mode: 'onChange' });

    const [passwordShown, setPasswordShown] = useState<IPasswordShown>({
        password: true,
        passwordConfirm: true,
    });
    const [globalErrorMessage, setGlobalFormMessage] = useState('');

    const [register] = useMutation<IRegisterUser>(REGISTER, {
        onCompleted: (data) => {
            // create the cookie of login
            document.cookie = 'signedin=true;path=/';

            const { success, ...user } = data.register;
            dispatch(loginUser(user as any));

            navigate('/user/home', { replace: true, state: { ...user } });
        },
        onError: (error) => {
            console.log(error?.message);
            setGlobalFormMessage(error?.message);
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
        setGlobalFormMessage('');
        register({ variables: { data: { ...data, roles: [RoleEnum.ADMIN] } } });
    };

    useEffect(() => {
        const subscription = watch(() => {
            setGlobalFormMessage('');
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <AuthLayout
            variant={AuthLayoutVariantEnum.REGISTER}
            title="Créer un compte"
            subtitle="ou utiliser votre adresse email pour vous inscrire."
            secondaryTitle="Welcome Back"
            secondarySubtitle="Pour rester connecté, veuillez vous connecter avec vos informations de connexion."
            secondaryBtnLabel="Se connecter"
            secondaryBtnOnClick={() => navigate(RouteEnum.LOGIN)}
            responsiveLinkLabel="Déjà membre. Se connecter."
            responsiveLinkRoute={RouteEnum.LOGIN}
        >
            <Form
                containerClassName="w-full flex flex-col items-center"
                containerStyle={{ maxWidth: 546 }}
                formClassName="flex flex-col items-center w-full"
                buttonSubmitLabel="S'incrire"
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
                    validation={validation.register.name}
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
                    containerClassName="mb-4 w-full max-w-sm"
                    error={errors?.name}
                />

                <TextField
                    control={control}
                    validation={validation.register.email}
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
                    error={errors?.email}
                />

                <TextField
                    control={control}
                    validation={validation.register.password}
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
                    containerClassName="mb-4 w-full max-w-sm"
                    handlePaste={handleResetDefault}
                    handleCopy={handleResetDefault}
                    error={errors?.password}
                />

                <TextField
                    control={control}
                    validation={validation.register.password}
                    type={!passwordShown.passwordConfirm ? 'text' : 'password'}
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
                    containerClassName="mb-6 sm:mb-8 w-full max-w-sm"
                    handlePaste={handleResetDefault}
                    handleCopy={handleResetDefault}
                    error={errors?.passwordConfirm}
                />
            </Form>
        </AuthLayout>
    );
};

export default Register;
