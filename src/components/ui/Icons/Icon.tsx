import { IconEnum, OpacityEnum } from '../../../enums';
import {
    BriefcaseIcon,
    ChevronDownIcon,
    EyeIcon,
    EyeOffIcon,
    LockClosedIcon,
    MailIcon,
    UserIcon,
    PlusIcon,
    XIcon,
    DotsHorizontalIcon,
    DocumentTextIcon,
    StarIcon
} from '@heroicons/react/solid';
import {
    ChatAltIcon,
    ClockIcon,
    PencilIcon,
    TrashIcon,
    EyeIcon as EyeIconOutline,
    EyeOffIcon as EyeOffIconOutline,
} from '@heroicons/react/outline';

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

            case IconEnum.EYE_OUTLINE:
                return (
                    <EyeIconOutline
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        }`}
                        onClick={onClick}
                    />
                );
            case IconEnum.EYE_OFF_OUTLINE:
                return (
                    <EyeOffIconOutline
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

            case IconEnum.BRIEFCASE:
                return (
                    <BriefcaseIcon
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

            case IconEnum.PENCIL_OUTLINE:
                return (
                    <PencilIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
                    />
                );

            case IconEnum.TRASH_OUTLINE:
                return (
                    <TrashIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
                    />
                );

            case IconEnum.PLUS:
                return (
                    <PlusIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
                    />
                );

            case IconEnum.X:
                return (
                    <XIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
                    />
                );

            case IconEnum.CHEVRON_DOWN:
                return (
                    <ChevronDownIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
                    />
                );

            case IconEnum.DOTS_HORIZONTAL:
                return (
                    <DotsHorizontalIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
                    />
                );

            case IconEnum.DOCUMENT_TEXT:
                return (
                    <DocumentTextIcon
                        className={`w-6 h-6 text-primary-main ${opacity} ${
                            onClick ? 'cursor-pointer' : 'cursor-default'
                        } ${className ?? ''}`}
                        onClick={onClick}
                    />
                );

            case IconEnum.STAR:
                return (
                    <StarIcon
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
