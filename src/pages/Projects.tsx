import { Link } from 'react-router-dom';
import CardsListProject from '../components/Projects/CardsListProject';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
    return (
        <div className="pl-20 pr-5">
            <div className="flex justify-between mt-3 mb-12">
                <div></div>
                <h1 className="flex justify-center text-4xl font-paytone-one text-violet-800 p-2">
                    Liste de projets
                </h1>
                <Link
                    to="/addproject"
                    className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-violet-800 rounded group active:bg-violet-500 focus:outline-none focus:ring"
                >
                    <span className="text-sm font-medium transition-all group-hover:ml-4">
                        <span className="absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4">
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                        Ajouter un projet
                    </span>
                </Link>
            </div>
            <div className="w-full flex justify-center pl-24 ">
                <CardsListProject />
            </div>
            <ToastContainer />
        </div>
    );
};

export default Projects;
