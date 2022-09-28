import Typography from '../../components/ui/Typography';
import Work from '../../assets/work-pressure.svg';
import { Link } from 'react-router-dom';
import {
    FontWeightEnum,
    IconEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import IconWithBg from '../../components/ui/Icons/IconWithBg';
import ImageSplitFullHeight from '../../components/images/ImageSplitFullHeight';

const ResetPasswordConfirm = () => {
    return (
        <section className="relative flex flex-wrap md:items-center w-full min-h-screen">
            <div className="flex flex-col justify-center w-full md:w-3/5 lg:w-1/2 text-center px-4 sm:pl-8">
                <div className="max-w-lg mx-auto text-center">
                    <IconWithBg variant={IconEnum.CHECK_CIRCLE} />

                    <Typography
                        variant={TypographyVariantEnum?.H1}
                        color="text-primary-main"
                        fontSize={'text-3xl sm:text-4xl'}
                        fontWeight={FontWeightEnum.BOLD}
                        textTransform={TextTransformEnum.NORMAL}
                        className="w-full mt-6 mb-6 sm:mb-6"
                    >
                        Mot de passe mis à jour
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum?.H5}
                        color="text-primary-main"
                        fontSize="text-md"
                        fontWeight={FontWeightEnum.NORMAL}
                        textTransform={TextTransformEnum.NORMAL}
                        className="my-4 mb-8 w-full max-w-xs mx-auto"
                    >
                        Votre nouveau mot de passe à été mis à jour avec succès.
                    </Typography>

                    <Link
                        to="/auth/login"
                        className="block w-full mt-8 px-5 py-3 text-sm font-medium text-white bg-primary-main rounded-lg"
                    >
                        Se connecter
                    </Link>
                </div>
            </div>

            <ImageSplitFullHeight
                src={Work}
                classNameContainer="hidden md:flex"
            />
        </section>
    );
};

export default ResetPasswordConfirm;
