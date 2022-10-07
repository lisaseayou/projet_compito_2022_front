import { IconEnum } from '../../../enums';
import {
    BriefcaseIcon,
    CheckCircleIcon,
    LockClosedIcon,
    MailIcon,
    TrashIcon,
} from '@heroicons/react/solid';

type IconProps = {
    variant: IconEnum;
};

const IconWithBg = ({ variant }: IconProps) => {
    const getIconComponent = () => {
        switch (variant) {
            case IconEnum.CHECK_CIRCLE:
                return (
                    <CheckCircleIcon className="w-6 h-6 text-primary-main" />
                );
            case IconEnum.LOCK_CLOSED:
                return <LockClosedIcon className="w-6 h-6 text-primary-main" />;
            case IconEnum.MAIL:
                return <MailIcon className="w-6 h-6 text-primary-main" />;
            case IconEnum.TRASH:
                return <TrashIcon className="w-6 h-6 text-primary-main" />;
            case IconEnum.BRIEFCASE:
                return <BriefcaseIcon className="w-6 h-6 text-primary-main" />;
            default:
                break;
        }
    };

    return (
        <div className="inline-flex justify-center bg-primary-secondary p-2 rounded-full">
            {getIconComponent()}
        </div>
    );
};

export default IconWithBg;
