import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pl-20 pr-5">
            <div className="flex justify-between mt-3 mb-12">
                <div></div>
                <h1 className="flex justify-center text-4xl font-paytone-one text-violet-800 p-2">
                    Home Page
                </h1>
                <Link
                    to="/auth/login"
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
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>
                        Se connecter
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Home;
