// hooks
import { useSelector } from 'react-redux';

// components
import Modal from '../components/Modal';
import ProfilItem from '../components/profile/ProfilItem';
import PrimaryLayout from '../layout/PrimaryLayout';

// types, interfaces & enums
import { IUser } from '../types/User';
import { JustifyContentEnum } from '../enums';
import SelectInput from '../components/ui/form/SelectInput';

const Profil = () => {
    const user: IUser = useSelector((state: any) => state.user);

    return (
        <>
            <PrimaryLayout
                title="Page de Profil"
                titleBoxAlign={JustifyContentEnum.CENTER}
            >
                <div className="flex flex-col justify-center w-full">
                    <ProfilItem>{user.name}</ProfilItem>
                    <ProfilItem>{user.email}</ProfilItem>
                    <ProfilItem>{user.url}</ProfilItem>
                    <ProfilItem>{user.linkedin}</ProfilItem>
                    <ProfilItem>{user.twitter}</ProfilItem>
                    <ProfilItem>{user.github}</ProfilItem>
                    <ProfilItem>{user.description}</ProfilItem>
                </div>
                <div><SelectInput/></div>

                <div className="flex justify-center items-center m-5">
                    <Modal />
                </div>
            </PrimaryLayout>
        </>
    );
};

export default Profil;
