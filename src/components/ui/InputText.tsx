import React from 'react';
type InputTextProps = {
    placeholder: string;
    type: string;
    id: string;
    icon: any;
};
const InputText = ({ type, id, placeholder, icon }: InputTextProps) => {
    return (
        <div className="relative mt-1">
            <span className="absolute inset-y-0 inline-flex items-center left-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                </svg>
            </span>

            <input
                type={type}
                id={id}
                className="w-full p-4 py-7 px-6 pl-12 font-display not-italic font-bold text-xl leading-none capitalize text-gray-900 bg-gray-light lightborder-gray-200 rounded-2lg shadow-sm"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputText;
