// hooks
import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// components
import Typography from './Typography';

// types, interfaces & enums
import {
    FontSizeEnum,
    FontWeightEnum,
    LinkVariantEnum,
    TypographyVariantEnum,
} from '../../enums';

// images & icons
import { ArrowLeftIcon } from '@heroicons/react/solid';

type LinkProps = {
    variant: LinkVariantEnum;
    label: string;
    iconNav?: ReactNode;
    iconBack?: ReactNode;
    to: string;
    navIsOpen?: boolean;
    setNavIsOpen?: (value: boolean) => void;
    classNameBack?: string;
};

const Link = ({
    variant,
    label,
    to,
    iconNav,
    iconBack,
    navIsOpen,
    setNavIsOpen,
    classNameBack,
}: LinkProps) => {
    if (variant === LinkVariantEnum.NAV) {
        return (
            <RouterLink
                to={to}
                className={`flex ${
                    !navIsOpen ? 'justify-center' : 'justify-start'
                } items-center ml-1 px-2 py-1.5 text-primary-main rounded hover:bg-gray-50 hover:text-primary-main relative group`}
                onClick={() => (setNavIsOpen ? setNavIsOpen(false) : {})}
            >
                {iconNav}
                <span
                    className={`${
                        !navIsOpen
                            ? 'hidden absolute opacity-0 top-0 -translate-y-full sm:top-1/2 sm:left-full sm:-translate-y-1/2 text-white bg-primary-main ml-4'
                            : 'hidden sm:flex relative opacity-100 text-primary-main'
                    } z-50 sm:flex text-sm font-medium w-max px-2 py-1.5 rounded group-hover:opacity-100`}
                >
                    {label}
                </span>
            </RouterLink>
        );
    }

    if (variant === LinkVariantEnum.BACK) {
        return (
            <RouterLink
                to={to}
                className={`flex justify-center items-center mt-8 hover:underline ${
                    classNameBack ?? ''
                }`}
            >
                {iconBack ?? (
                    <ArrowLeftIcon className="h-4 w-4 text-primary-main" />
                )}
                <Typography
                    variant={TypographyVariantEnum?.BUTTON}
                    color="text-primary-main"
                    fontSize={FontSizeEnum.SM}
                    fontWeight={FontWeightEnum.NORMAL}
                    className="ml-2"
                >
                    {label}
                </Typography>
            </RouterLink>
        );
    }

    return <></>;
};

export default Link;
