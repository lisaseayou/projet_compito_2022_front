import { IconEnum, OpacityEnum } from '../../../enums';
import {
    EyeIcon,
    EyeOffIcon,
    LockClosedIcon,
    MailIcon,
    UserIcon,
} from '@heroicons/react/solid';
import { ClockIcon, ChatAltIcon } from '@heroicons/react/outline';

type IconProps = {
    variant: IconEnum;
    opacity: OpacityEnum;
    className?: string;
    onClick?: () => void;
};

const Icon = ({
    variant,
    className,
    onClick,
    opacity = OpacityEnum.OPACITY_100,
}: IconProps) => {
    const getIconComponent = () => {
        switch (variant) {
            case IconEnum.EYE:
                return (
                    <EyeIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        }`}
                        onClick={onClick}
                    />
                );
            case IconEnum.EYE_OFF:
                return (
                    <EyeOffIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        }`}
                        onClick={onClick}
                    />
                );

            case IconEnum.LOCK_CLOSED:
                return (
                    <LockClosedIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        }`}
                        onClick={onClick}
                    />
                );

            case IconEnum.MAIL:
                return (
                    <MailIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        }`}
                        onClick={onClick}
                    />
                );

            case IconEnum.USER:
                return (
                    <UserIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        }`}
                        onClick={onClick}
                    />
                );

            case IconEnum.CLOCK_OUTLINE:
                return (
                    <ClockIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
                    />
                );

            case IconEnum.CHAT_ALT_OUTLINE:
                return (
                    <ChatAltIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
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
