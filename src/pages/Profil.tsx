import { useSelector } from 'react-redux';
import Modal from '../components/Modal';
import { IUser } from '../types/User';

const Profil = () => {
    const user: IUser = useSelector((state: any) => state.auth.user);

    return (
        <>
            <div className="pl-20 pr-5">
                <div></div>
                <h1 className="flex justify-center text-4xl font-paytone-one text-violet-800 p-2">
                    Profil Page
                </h1>
            </div>
            <>
                <div>
                    <p className="flex justify-center items-center w-full h-full">
                        {user.name}
                    </p>
                    <p className="flex justify-center items-center w-full h-full">
                        {user.email}
                    </p>
                    <p className="flex justify-center items-center w-full h-full">
                        {user.url}
                    </p>
                    <p className="flex justify-center items-center w-full h-full">
                        {user.linkedin}
                    </p>
                    <p className="flex justify-center items-center w-full h-full">
                        {user.twitter}
                    </p>
                    <p className="flex justify-center items-center w-full h-full">
                        {user.github}
                    </p>
                    <p className="flex justify-center items-center w-full h-full">
                        {user.description}
                    </p>
                </div>
            </>

            <div className="flex justify-center items-center m-5">
                <Modal />
            </div>
        </>
    );
};

export default Profil;
