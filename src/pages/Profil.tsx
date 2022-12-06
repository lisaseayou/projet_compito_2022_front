// hooks
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

// components
import Modal from '../components/Modal';
import ProfilItem from '../components/profile/ProfilItem';
import PrimaryLayout from '../layout/PrimaryLayout';
import SelectInput from '../components/ui/form/SelectInput';

// types, interfaces & enums
import { IUser } from '../types/User';
import { JustifyContentEnum } from '../enums';
import validation from '../validation';

const Profil = () => {
    const user: IUser = useSelector((state: any) => state.user);

    const {
        control,
        watch,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const options = [
        { value: 'jerem', label: 'Jeremy' },
        { value: 'anais', label: 'Anais' },
        { value: 'alex', label: 'Alexandre' },
    ];

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
                {/* <div>
                    <SelectInput
                        name="user"
                        placeholder="Utilisateurs"
                        options={options}
                        isClearable
                        onChange={() => {}}
                        isMultiple
                    />
                </div> */}
                <div className="w-80">
                    <SelectInput
                        control={control}
                        validation={validation.addTask.description}
                        id="status"
                        name="status"
                        placeholder="Status"
                        options={options}
                        isClearable
                        isMultiple
                    />
                </div>

                <div className="flex justify-center items-center m-5">
                    <Modal />
                </div>
            </PrimaryLayout>
        </>
    );
};

export default Profil;
