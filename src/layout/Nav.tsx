import {
    ClipboardListIcon,
    TagIcon,
    TemplateIcon,
    UserIcon,
} from '@heroicons/react/solid';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Link from '../components/ui/Link';

function Nav() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-between w-20 h-screen bg-white border-r fixed mr-6">
            <div>
                <div className="flex items-center justify-center w-18 h-16 pt-1,5">
                    <RouterLink to="/user/home">
                        <img
                            src="./assets/logo/logoswag.svg"
                            alt="logo"
                            className="w-18"
                        />
                    </RouterLink>
                </div>

                <div className="">
                    <nav className="flex flex-col p-2">
                        <ul className="pt-4 space-y-1 border-t border-gray-100">
                            <li>
                                <Link
                                    variant="nav"
                                    to="/projects"
                                    icon={
                                        <ClipboardListIcon className="text-violet-400 w-16" />
                                    }
                                    label="Projets"
                                />
                            </li>

                            <li>
                                <Link
                                    variant="nav"
                                    to="/tasks"
                                    icon={
                                        <TagIcon className="text-violet-400 w-16" />
                                    }
                                    label="Tasks"
                                />
                            </li>

                            <li>
                                <Link
                                    variant="nav"
                                    to="/dashboard"
                                    icon={
                                        <TemplateIcon className="text-violet-500 w-16" />
                                    }
                                    label="Dashboard"
                                />
                            </li>

                            <li>
                                <Link
                                    variant="nav"
                                    to="/profil"
                                    icon={
                                        <UserIcon className="text-violet-800 w-16" />
                                    }
                                    label="Profil"
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 p-2 bg-white border-t border-gray-100">
                <form action="/logout">
                    <button
                        type="submit"
                        className="flex justify-center w-full px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 group relative"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>

                        <span
                            className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100"
                            onClick={() => navigate('/logout')}
                        >
                            Logout
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Nav;
