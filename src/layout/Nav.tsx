import {
    ClipboardListIcon,
    MinusIcon,
    PlusIcon,
    TagIcon,
    TemplateIcon,
    UserIcon,
} from '@heroicons/react/solid';
import { Link as RouterLink } from 'react-router-dom';
import Link from '../components/ui/Link';
import { LinkVariantEnum } from '../enums';
import { ReactComponent as Logout } from '../assets/icons/logout.svg';
import { ReactComponent as Logo } from '../assets/logoswag.svg';
import { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className={`fixed z-50 bottom-0 sm:bottom-auto flex sm:flex-col justify-between items-stretch p-2 sm:p-1 w-full sm:h-screen bg-white border-t sm:border-t-0 sm:border-r ${
                !isOpen ? 'sm:w-16' : 'sm:w-48'
            }`}
        >
            <div className="absolute hidden sm:inline-flex top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-max">
                <button
                    className="bg-primary-main rounded-full border-4 border-white p-2"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    {isOpen ? (
                        <MinusIcon className="text-white w-6 sm:w-6" />
                    ) : (
                        <PlusIcon className="text-white w-6 sm:w-6" />
                    )}
                </button>
            </div>

            <div className="flex items-center justify-start w-auto sm:h-16 pr-4 sm:pr-0 pt-1,5 border-r sm:border-r-0 sm:border-b border-secondary-light">
                <RouterLink to="/user/home">
                    <Logo className="w-14" />
                </RouterLink>
            </div>

            <nav className="flex flex-col items-start h-inherit">
                <ul className="flex sm:flex-col sm:pt-4 space-y-1 w-full">
                    <li className="w-full">
                        <Link
                            variant={LinkVariantEnum.NAV}
                            to="/projects"
                            iconNav={
                                <ClipboardListIcon className="text-primary-main w-8 sm:w-8" />
                            }
                            label="Projets"
                            navIsOpen={isOpen}
                            setNavIsOpen={setIsOpen}
                        />
                    </li>

                    <li>
                        <Link
                            variant={LinkVariantEnum.NAV}
                            to="/tasks"
                            iconNav={
                                <TagIcon className="text-primary-main w-8 sm:w-8" />
                            }
                            label="Tasks"
                            navIsOpen={isOpen}
                            setNavIsOpen={setIsOpen}
                        />
                    </li>

                    <li>
                        <Link
                            variant={LinkVariantEnum.NAV}
                            to="/dashboard"
                            iconNav={
                                <TemplateIcon className="text-primary-main w-8 sm:w-8" />
                            }
                            label="Dashboard"
                            navIsOpen={isOpen}
                            setNavIsOpen={setIsOpen}
                        />
                    </li>

                    <li>
                        <Link
                            variant={LinkVariantEnum.NAV}
                            to="/profil"
                            iconNav={
                                <UserIcon className="text-primary-main w-8 sm:w-8" />
                            }
                            label="Profil"
                            navIsOpen={isOpen}
                            setNavIsOpen={setIsOpen}
                        />
                    </li>
                </ul>
            </nav>

            <div className="sticky flex justify-start inset-x-0 bottom-0 bg-white border-l sm:border-l-0 sm:border-t border-secondary-light ml-1">
                <Link
                    variant={LinkVariantEnum.NAV}
                    to="/logout"
                    iconNav={
                        <Logout className="text-primary-main w-8 sm:w-8 opacity-60 group-hover:opacity-100" />
                    }
                    label="Se déconnecter"
                    navIsOpen={isOpen}
                    setNavIsOpen={setIsOpen}
                />
            </div>
        </div>
    );
}

export default Nav;
