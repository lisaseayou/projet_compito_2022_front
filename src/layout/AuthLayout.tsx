// hooks
import { ReactNode, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import AuthSwitchScreen from '../components/layout/auth/AuthSwitchScreen';
import SocialButton from '../components/ui/Buttons/SocialButton';
import Typography from '../components/ui/Typography';
import IconWithBg from '../components/ui/Icons/IconWithBg';

// types, interfaces && enums
import { IUser } from '../types/User';
import {
    AuthLayoutVariantEnum,
    FontSizeEnum,
    IconEnum,
    RouteEnum,
    TextLineHeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../enums';

// images && icons
import {
    faFacebookF,
    faLinkedinIn,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';

type AuthLayoutProps = {
    children: ReactNode;
    variant: AuthLayoutVariantEnum;
    title: string;
    subtitle: string;
    secondaryTitle: string;
    secondarySubtitle: string;
    secondaryBtnLabel: string;
    secondaryBtnOnClick: () => void;
    responsiveLinkLabel: string;
    responsiveLinkRoute: RouteEnum;
};

const AuthLayout = ({
    children,
    variant,
    title,
    subtitle,
    secondaryTitle,
    secondarySubtitle,
    secondaryBtnLabel,
    secondaryBtnOnClick,
    responsiveLinkLabel,
    responsiveLinkRoute,
}: AuthLayoutProps) => {
    const navigate = useNavigate();
    const user: IUser = useSelector((state: any) => state.user);

    useEffect(() => {
        if (user.email) {
            navigate(RouteEnum.USER_HOME);
        }
    }, []);

    return (
        <div className="relative grid grid-cols-12 gap-0 min-h-screen text-center">
            <div className="absolute right-2 flex md:hidden justify-end">
                <Link
                    to={responsiveLinkRoute}
                    className="hover:underline decoration-primary"
                >
                    <Typography
                        variant={TypographyVariantEnum?.P}
                        color="text-primary-main"
                        className="mb-0"
                        fontSize={FontSizeEnum.SM}
                    >
                        {responsiveLinkLabel}
                    </Typography>
                </Link>
            </div>

            {variant === AuthLayoutVariantEnum.REGISTER && (
                <AuthSwitchScreen
                    title={secondaryTitle}
                    subtitle={secondarySubtitle}
                    btnLabel={secondaryBtnLabel}
                    btnOnClick={secondaryBtnOnClick}
                />
            )}

            <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-center pt-20 pb-10 sm:py-10 px-4">
                <IconWithBg variant={IconEnum.LOCK_CLOSED} />

                <Typography
                    variant={TypographyVariantEnum?.H2}
                    color="text-primary-main"
                    fontSize={'text-3xl sm:text-4xl'}
                    textTransform={TextTransformEnum.NORMAL}
                    className="mb-6 sm:mb-12 mt-2"
                >
                    {title}
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
                    {subtitle}
                </Typography>

                {children}
            </div>

            {variant === AuthLayoutVariantEnum.LOGIN && (
                <AuthSwitchScreen
                    title={secondaryTitle}
                    subtitle={secondarySubtitle}
                    btnLabel={secondaryBtnLabel}
                    btnOnClick={secondaryBtnOnClick}
                />
            )}
        </div>
    );
};

export default AuthLayout;
