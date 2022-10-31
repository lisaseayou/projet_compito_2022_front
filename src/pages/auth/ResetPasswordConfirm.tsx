// hooks
import { Link } from 'react-router-dom';

// components
import ForgotPasswordLayout from '../../layout/ForgotPasswordLayout';

// types, interfaces & enums
import { IconEnum, RouteEnum } from '../../enums';

// images & icons
import workImg from '../../assets/work-pressure.svg';

const ResetPasswordConfirm = () => {
    return (
        <ForgotPasswordLayout
            imageSplit={workImg}
            icon={IconEnum.CHECK_CIRCLE}
            title="Mot de passe mis à jour"
            subtitle="Votre nouveau mot de passe à été mis à jour avec succès."
        >
            <div className="w-full max-w-md mx-auto text-center">
                <Link
                    to={RouteEnum.LOGIN}
                    className="block w-full mt-8 px-5 py-3 text-sm font-medium text-white bg-primary-main rounded-lg"
                >
                    Se connecter
                </Link>
            </div>
        </ForgotPasswordLayout>
    );
};

export default ResetPasswordConfirm;
