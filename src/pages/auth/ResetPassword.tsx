// hooks
import { ClipboardEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// components
import TextField from '../../components/ui/form/TextField';
import Icon from '../../components/ui/Icons/Icon';
import NoResult from '../../components/errors/NoResult';
import ForgotPasswordLayout from '../../layout/ForgotPasswordLayout';
import FormError from '../../components/Form/FormError';
import Form from '../../components/Form/Form';

// utils & helpers
import validation from '../../validation';

// graphql
import { REQUEST_PASSWORD } from '../../graphql/mutation';
import { GET_USER_BY_RESET_TOKEN } from '../../graphql/query';

// types, interfaces & enums
import { IGetUserByResetToken, IResetPassword } from '../../types/User';
import {
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    RouteEnum,
    TypographyVariantEnum,
} from '../../enums';

// images & icons
import workImg from '../../assets/work-pressure.svg';
import NotAuthorizedImg from '../../assets/not-authorized.svg';

const ResetPassword = () => {
    const navigate = useNavigate();
    const params = useParams();

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors, isSubmitted, isValid },
    } = useForm({ mode: 'onChange' });

    const { data, loading, error } = useQuery<IGetUserByResetToken>(
        GET_USER_BY_RESET_TOKEN,
        {
            variables: { resetToken: params?.resetToken },
            onError(error) {
                setGlobalFormMessage(error?.message);
            },
        }
    );

    const [passwordShown, setPasswordShown] = useState({
        password: true,
        passwordConfirm: true,
    });
    const [globalErrorMessage, setGlobalFormMessage] = useState('');

    const [resetPassword, { error: errorReset }] = useMutation<IResetPassword>(
        REQUEST_PASSWORD,
        {
            onCompleted: () => {
                navigate(RouteEnum.RESET_PASSWORD_CONFIRM);
            },
            onError(error) {
                setGlobalFormMessage(error?.message);
            },
        }
    );

    const handleCopy = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        return false;
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        return false;
    };

    const onSubmit: SubmitHandler<FieldValues> = (formDatas: FieldValues) => {
        resetPassword({
            variables: {
                email: data?.userByResetToken?.email,
                resetToken: data?.userByResetToken?.resetToken,
                password: formDatas.password,
                passwordConfirm: formDatas.passwordConfirm,
            },
        });
    };

    useEffect(() => {
        const subscription = watch(() => {
            setGlobalFormMessage('');
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    if (error) {
        return (
            <section className="relative flex items-center justify-center w-full min-h-screen">
                <div className="relative block col-span-12 w-full max-w-lg">
                    <NoResult
                        typoVariant={TypographyVariantEnum.H4}
                        fontSize="text-2xl sm:text-3xl"
                        fontWeight={FontWeightEnum.BOLD}
                        image={NotAuthorizedImg}
                        text={error.message}
                        btnLabel="Se connecter"
                        btnOnclick={() => navigate(RouteEnum.LOGIN)}
                    />
                </div>
            </section>
        );
    }

    return (
        <ForgotPasswordLayout
            imageSplit={workImg}
            icon={IconEnum.LOCK_CLOSED}
            title="Définissez votre nouveau mot de passe"
            subtitle="Votre nouveau mot de passe doit être différent que les mots de passe utilisé précédemment."
        >
            <Form
                containerClassName="w-full flex flex-col items-center mt-8 mb-0 mx-auto"
                containerStyle={{ maxWidth: 546 }}
                formClassName="flex flex-col items-center justify-center w-full mx-auto"
                isValid={isValid}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                buttonSubmitLabel="Changer le mot de passe"
            >
                <FormError
                    isSubmitted={isSubmitted}
                    globalErrorMessage={globalErrorMessage}
                />

                <TextField
                    control={control}
                    validation={validation.resetPassword.password}
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
                    containerClassName="mb-4 sm:mb-4 mt-0 w-full max-w-sm"
                    handlePaste={handlePaste}
                    handleCopy={handleCopy}
                    error={errors?.password}
                />

                <TextField
                    control={control}
                    validation={validation.resetPassword.passwordConfirm}
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
                    containerClassName="mb-4 sm:mb-4 mt-0 w-full max-w-sm"
                    handlePaste={handlePaste}
                    handleCopy={handleCopy}
                    error={errors?.passwordConfirm}
                />
            </Form>
        </ForgotPasswordLayout>
    );
};

export default ResetPassword;
