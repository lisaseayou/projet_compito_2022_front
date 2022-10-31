import Alert from '../ui/Alert';
import { AlertVariantEnum } from '../../enums';

type FormErrorProps = {
    isSubmitted: boolean;
    globalErrorMessage: string;
    containerClassName?: string;
};

const FormError = ({
    isSubmitted,
    globalErrorMessage,
    containerClassName = 'w-11/12 max-w-sm flex justify-center',
}: FormErrorProps) => {
    return (
        <>
            {isSubmitted && globalErrorMessage && (
                <Alert
                    variant={AlertVariantEnum.FORM_ERROR}
                    containerClassName={containerClassName}
                >
                    {globalErrorMessage}
                </Alert>
            )}
        </>
    );
};

export default FormError;
