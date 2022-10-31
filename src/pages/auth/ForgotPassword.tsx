// hooks
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// components
import TextField from '../../components/ui/form/TextField';
import Icon from '../../components/ui/Icons/Icon';
import ForgotPasswordLayout from '../../layout/ForgotPasswordLayout';
import Form from '../../components/Form/Form';
import FormError from '../../components/Form/FormError';

// utils & helpers
import validation from '../../validation';

// graphql
import { REQUEST_RESET_PASSWORD } from '../../graphql/mutation';

// types, interfaces & enums
import { IForgotPassword } from '../../types/User';
import { IconEnum, OpacityEnum, RouteEnum } from '../../enums';

// images & icons
import workImg from '../../assets/work-pressure.svg';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        getValues,
        watch,
        formState: { errors, isSubmitted, isValid },
    } = useForm({ mode: 'onChange' });

    const [globalErrorMessage, setGlobalFormMessage] = useState('');

    const [resetPassword] = useMutation<IForgotPassword>(
        REQUEST_RESET_PASSWORD,
        {
            onCompleted: () => {
                navigate(RouteEnum.CHECK_EMAIL, {
                    state: { email: getValues('email') },
                });
            },
            onError(error) {
                setGlobalFormMessage(error?.message);
            },
        }
    );

    const onSubmit: SubmitHandler<FieldValues> = (formData: FieldValues) => {
        resetPassword({ variables: { email: formData.email } });
    };

    useEffect(() => {
        const subscription = watch(() => {
            setGlobalFormMessage('');
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <ForgotPasswordLayout
            imageSplit={workImg}
            icon={IconEnum.LOCK_CLOSED}
            title="Mot de passe oublié ?"
            subtitle="Pas de soucis, vous allez recevoir les instructions par email."
        >
            <Form
                containerClassName="w-full flex flex-col items-center mt-8 mb-0 mx-auto"
                containerStyle={{ maxWidth: 546 }}
                formClassName="flex flex-col items-center justify-center w-full mx-auto"
                buttonSubmitClassName="w-full max-w-sm"
                isValid={isValid}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            >
                <FormError
                    isSubmitted={isSubmitted}
                    globalErrorMessage={globalErrorMessage}
                />

                <TextField
                    control={control}
                    validation={validation.forgotPassword.email}
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
            </Form>
        </ForgotPasswordLayout>
    );
};

export default ForgotPassword;
