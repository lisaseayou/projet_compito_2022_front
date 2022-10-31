// React
import { ReactNode } from 'react';

// components
import Button from '../components/ui/Buttons/Button';
import Typography from '../components/ui/Typography';

// types, interfaces && enums
import {
    TypographyVariantEnum,
    TextTransformEnum,
    ButtonVariantEnum,
    JustifyContentEnum,
} from '../enums';

type PrimaryLayoutProps = {
    title: string;
    titleVariant?: TypographyVariantEnum;
    titleBoxAlign?: JustifyContentEnum;
    showCTA?: boolean;
    labelCTA?: string;
    onClickCTA?: () => void;
    children: ReactNode;
};

const PrimaryLayout = ({
    title,
    titleVariant = TypographyVariantEnum?.H2,
    titleBoxAlign = JustifyContentEnum.BETWEEN,
    showCTA = false,
    labelCTA,
    onClickCTA,
    children,
}: PrimaryLayoutProps) => {
    return (
        <div className="flex flex-col items-center px-4 py-6 sm:py-14 max-w-screen-xl min-h-screen sm:pl-10">
            <div
                className={`flex flex-col sm:flex-row items-start ${titleBoxAlign} mb-12 w-full`}
            >
                {showCTA && <div className="hidden sm:block"></div>}

                <Typography
                    variant={titleVariant}
                    color="text-primary-main"
                    fontSize={'text-3xl sm:text-4xl'}
                    textTransform={TextTransformEnum.NORMAL}
                    className="mb-4 sm:mb-0 text-center w-full sm:w-auto"
                >
                    {title}
                </Typography>

                {showCTA && (
                    <div className="flex justify-center w-full sm:w-auto mt-6 sm:mt-0">
                        <Button
                            variant={ButtonVariantEnum.CTA}
                            onClick={onClickCTA}
                        >
                            {labelCTA}
                        </Button>
                    </div>
                )}
            </div>

            {children}
        </div>
    );
};

export default PrimaryLayout;
