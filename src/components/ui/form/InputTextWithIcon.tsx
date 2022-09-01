import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const InputTextWithIcon = ({
    containerclassName,
}: {
    containerclassName: string;
}) => {
    return (
        <div className={containerclassName}>
            <label htmlFor="email" className="sr-only">
                Email
            </label>

            <div className="relative">
                <input
                    type="email"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter email"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <SearchIcon className="w-5 h-5 text-gray-400" />
                </span>
            </div>
        </div>
    );
};

export default InputTextWithIcon;
