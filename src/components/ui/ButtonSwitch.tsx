import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid';

type ButtonSwitchProps = {
    onClick: () => void;
    show: boolean;
};

const ButtonSwitch = ({ onClick, show }: ButtonSwitchProps) => {
    return (
        <button
            type="button"
            className="ml-3 mr-3 mb-4 bg-gray-100 border border-gray-100 p-1 rounded-lg text-primary-main"
            onClick={onClick}
        >
            {show ? (
                <ViewListIcon className="w-8 h-8" />
            ) : (
                <ViewGridIcon className="w-8 h-8" />
            )}
        </button>
    );
};

export default ButtonSwitch;
