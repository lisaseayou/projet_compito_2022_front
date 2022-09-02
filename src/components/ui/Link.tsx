import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
    variant: string;
    label: string;
    icon: any;
    to: string;
};
const Link = ({ variant, label, to, icon }: LinkProps) => {
    if (variant === 'nav') {
        return (
            <RouterLink
                to={to}
                className="flex justify-center px-2 py-1.5 text-violet-500 rounded hover:bg-gray-50 hover:text-violet-500 relative group"
            >
                {icon}
                <span className="absolute text-xs font-medium text-white bg-violet-300 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                    {label}
                </span>
            </RouterLink>
        );
    }

    return <></>;
};

export default Link;
