// hooks
import { ReactNode } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

// components
import Button from '../ui/Buttons/Button';

// types, interfaces && enums
import { ButtonTypeEnum, ButtonVariantEnum } from '../../enums';

type FormProps = {
    containerClassName?: string;
    containerStyle?: object;
    formClassName?: string;
    buttonSubmitClassName?: string;
    children: ReactNode;
    buttonSubmitLabel?: string;
    buttonSubmitVariant?: ButtonVariantEnum;
    isValid: boolean;
    handleSubmit: any;
    onSubmit: SubmitHandler<FieldValues>;
};

const Form = ({
    containerClassName,
    containerStyle,
    formClassName,
    buttonSubmitLabel = 'Envoyer',
    buttonSubmitVariant = ButtonVariantEnum.PRIMARY,
    buttonSubmitClassName,
    isValid,
    handleSubmit,
    onSubmit,
    children,
}: FormProps) => {
    return (
        <div className={containerClassName} style={containerStyle}>
            <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
                {children}

                <Button
                    type={ButtonTypeEnum?.SUBMIT}
                    variant={buttonSubmitVariant}
                    className={buttonSubmitClassName}
                    disabled={!isValid}
                >
                    {buttonSubmitLabel}
                </Button>
            </form>
        </div>
    );
};

export default Form;
