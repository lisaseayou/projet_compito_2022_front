// hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

// components
import CardProject from './CardProject';
import NoResult from '../errors/NoResult';
import Loader from '../ui/loader/Loader';

// graphql
import { GET_PROJECT_BY_USER } from '../../graphql/query';

// types, interfaces & enums
import { IGetProjectsByUser, IProject } from '../../types/Project';
import { IUser } from '../../types/User';
import {
    TypographyVariantEnum,
    TextTransformEnum,
    FontWeightEnum,
} from '../../enums';

// images & icons
import NoResultImg from '../../assets/no-result.svg';

interface CardListProps {
    setShowAddProject: (value: boolean) => void;
}

const CardsList = ({ setShowAddProject }: CardListProps) => {
    const user: IUser = useSelector((state: any) => state.user);
    const [modalUpdateOrDeleteID, setModalUpdateOrDeleteID] = useState('');

    const { loading, error, data } = useQuery<IGetProjectsByUser>(
        GET_PROJECT_BY_USER,
        {
            variables: { userId: user.id },
        }
    );

    if (loading) {
        return <Loader label="Chargement..." />
    }

    if (error) {
        return <p>error</p>;
    }

    return (
        <div className="grid grid-cols-12 gap-6">
            {!data || data?.projectsByUser?.length > 0 ? (
                data?.projectsByUser?.map((project: IProject) => (
                    <CardProject
                        key={project.id}
                        project={project}
                        modalUpdateOrDeleteID={modalUpdateOrDeleteID}
                        setModalUpdateOrDeleteID={setModalUpdateOrDeleteID}
                    />
                ))
            ) : (
                <div className="relative block col-span-12 w-full">
                    <NoResult
                        typoVariant={TypographyVariantEnum.H4}
                        fontWeight={FontWeightEnum.BOLD}
                        textTransform={TextTransformEnum.UPPERCASE}
                        image={NoResultImg}
                        text="Aucun projet pour le moment."
                        btnLabel="Créer un nouveau projet"
                        btnOnclick={() => setShowAddProject(true)}
                    />
                </div>
            )}
        </div>
    );
};

export default CardsList;
