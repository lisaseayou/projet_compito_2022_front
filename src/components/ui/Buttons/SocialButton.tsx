import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SocialButtonProps = {
    icon: IconProp;
};

const SocialButton = ({ icon }: SocialButtonProps) => {
    return (
        <button className="group flex justify-center items-center border border-solid border-gray-secondary hover:bg-primary-main rounded-full w-12 h-12">
            <FontAwesomeIcon
                className="text-primary-main text-xl group-hover:text-white"
                icon={icon}
            />
        </button>
    );
};

export default SocialButton;
