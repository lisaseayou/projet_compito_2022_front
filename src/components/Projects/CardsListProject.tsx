import { useQuery } from '@apollo/client';
import { GET_ALL_PROJECTS } from '../../graphql/query';
import { IGetAllProjects, IProject } from '../../types/Project';
import CardProject from './CardProject';

const CardsList = () => {
    const { loading, error, data } =
        useQuery<IGetAllProjects>(GET_ALL_PROJECTS);

    if (loading) {
        return <p>loading</p>;
    }

    if (error) {
        return <p>error</p>;
    }
    return (
        <div className="grid grid-cols-12 gap-6">
            {data?.allProjects?.map((project: IProject) => (
                <CardProject key={project.id} project={project} />
            ))}
        </div>
    );
};

export default CardsList;
