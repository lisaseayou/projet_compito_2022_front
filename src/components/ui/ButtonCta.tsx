import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';

type ButtonCTAProps = {
    link: string;
    children: ReactNode;
}

const ButtonCta = ({ link, children }: ButtonCTAProps) => {
    return (
        <Link
            to={link}
            className="relative mr-2 inline-flex items-center px-8 py-3 overflow-hidden text-white bg-primary-main rounded group active:bg-violet-500 focus:outline-none focus:ring"
        >
            <span className="text-sm font-medium transition-all group-hover:ml-4">
                <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                    <ArrowNarrowLeftIcon className="w-5 h-5 text-white" />
                </span>
                {children}
            </span>
        </Link>
    );
};

export default ButtonCta;
