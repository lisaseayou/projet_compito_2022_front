// react
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components
import Link from '../components/ui/Link';
import Typography from '../components/ui/Typography';
import ImageSplitFullHeight from '../components/images/ImageSplitFullHeight';
import IconWithBg from '../components/ui/Icons/IconWithBg';

// types, interfaces & enums
import { IUser } from '../types/User';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    LinkVariantEnum,
    RouteEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../enums';
import { IRootState } from '../types';

type ForgotPasswordLayoutProps = {
    children: ReactNode;
    imageSplit: string;
    icon: IconEnum;
    title: string;
    subtitle: string;
};

const ForgotPasswordLayout = ({
    imageSplit,
    icon,
    title,
    subtitle,
    children,
}: ForgotPasswordLayoutProps) => {
    const navigate = useNavigate();
    const user: IUser = useSelector((state: IRootState) => state.user);

    useEffect(() => {
        if (user.email) {
            navigate(RouteEnum.USER_HOME);
        }
    }, []);

    return (
        <div className="relative flex flex-wrap md:items-center w-full min-h-screen">
            <div className="flex flex-col justify-center w-full md:w-3/5 lg:w-1/2 text-center px-4 sm:pl-8">
                <div className="max-w-lg mx-auto text-center">
                    <IconWithBg variant={icon} />

                    <Typography
                        variant={TypographyVariantEnum?.H1}
                        color="text-primary-main"
                        fontSize={'text-3xl sm:text-4xl'}
                        fontWeight={FontWeightEnum.BOLD}
                        textTransform={TextTransformEnum.NORMAL}
                        className="w-full mt-6 mb-6 sm:mb-6"
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum?.H5}
                        color="text-primary-main"
                        fontSize={FontSizeEnum.BASE}
                        fontWeight={FontWeightEnum.NORMAL}
                        textTransform={TextTransformEnum.NORMAL}
                        className="w-full max-w-md mt-6 mx-auto"
                    >
                        {subtitle}
                    </Typography>
                </div>

                {children}

                <Link
                    variant={LinkVariantEnum.BACK}
                    to={RouteEnum.LOGIN}
                    label="Revenir à la connexion"
                    classNameBack="mb-4"
                />
            </div>

            <ImageSplitFullHeight
                src={imageSplit}
                classNameContainer="hidden md:flex"
            />
        </div>
    );
};

export default ForgotPasswordLayout;
