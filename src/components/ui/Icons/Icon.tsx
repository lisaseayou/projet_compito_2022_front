import { IconEnum, OpacityEnum } from '../../../enums';
import { LockClosedIcon, MailIcon } from '@heroicons/react/solid';

type IconProps = {
    variant: IconEnum;
    opacity: OpacityEnum;
};

const Icon = ({ variant, opacity = OpacityEnum.OPACITY_100 }: IconProps) => {
    const getIconComponent = () => {
        switch (variant) {
            case IconEnum.LOCK_CLOSED:
                return (
                    <LockClosedIcon
                        className={`w-6 h-6 text-primary-main ${opacity} `}
                    />
                );
            case IconEnum.MAIL:
                return (
                    <MailIcon
                        className={`w-6 h-6 text-primary-main ${opacity} `}
                    />
                );

            default:
                break;
        }
    };

    return (
        <div className="inline-flex justify-center">{getIconComponent()}</div>
    );
};

export default Icon;
