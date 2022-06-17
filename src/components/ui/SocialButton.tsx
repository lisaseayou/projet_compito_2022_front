import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SocialButtonProps = {
    icon: any;
};

const SocialButton = ({ icon }: SocialButtonProps) => {
    return (
        <button className="group border border-solid border-gray-secondary hover:bg-primary-main rounded-full w-20 h-20">
            <FontAwesomeIcon
                className="text-primary-main text-3xl group-hover:text-white"
                icon={icon}
            />
        </button>
    );
};

export default SocialButton;
