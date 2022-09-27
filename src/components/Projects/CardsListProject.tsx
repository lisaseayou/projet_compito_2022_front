import { useQuery } from '@apollo/client';
import { GET_ALL_PROJECTS } from '../../graphql/query';
import CardProject from './CardProject';

const CardsList = () => {
    const { loading, error, data } = useQuery(GET_ALL_PROJECTS);
    console.log(data);
    if (loading) {
        return <p>loading</p>;
    }

    if (error) {
        return <p>error</p>;
    }
    return (
        <div className="grid grid-cols-3 gap-10">
            {data.allProjects.map((project: any) => (
                <CardProject key={project.id} project={project} />
            ))}
        </div>
    );
};

export default CardsList;
