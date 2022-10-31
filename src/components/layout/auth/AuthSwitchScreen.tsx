import {
    ButtonVariantEnum,
    FontSizeEnum,
    TextLineHeightEnum,
    TypographyVariantEnum,
} from '../../../enums';
import Button from '../../ui/Buttons/Button';
import Typography from '../../ui/Typography';

type AuthSwitchScreenProps = {
    title: string;
    subtitle: string;
    btnLabel: string;
    btnOnClick: () => void;
};

const AuthSwitchScreen = ({ title, subtitle, btnLabel, btnOnClick}: AuthSwitchScreenProps) => {
    return (
        <div className="col-span-5 bg-primary-main hidden md:flex flex-col justify-center items-center p-4 py-10">
            <Typography
                variant={TypographyVariantEnum?.H2}
                color="text-white"
                fontSize={'text-3xl sm:text-4xl'}
                className="mb-10"
                style={{ width: '85%', maxWidth: 430 }}
            >
                {title}
            </Typography>

            <Typography
                variant={TypographyVariantEnum?.H5}
                color="text-white"
                fontSize={FontSizeEnum.LG}
                leading={TextLineHeightEnum.LINE_HEIGHT_7}
                className="mb-14"
                style={{ width: '85%', maxWidth: 430 }}
            >
                {subtitle}
            </Typography>

            <Button variant={ButtonVariantEnum.OUTLINE} onClick={btnOnClick}>
                {btnLabel}
            </Button>
        </div>
    );
};

export default AuthSwitchScreen;
