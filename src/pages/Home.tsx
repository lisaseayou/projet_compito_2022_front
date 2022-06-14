import { useQuery } from '@apollo/client';
import { GET_ALL_PROJECTS } from '../queries/query';

const Home = () => {
    const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

    // if(loading) {
    //   return "...loading"
    // }

    console.log(data);
    return (
        <div className="flex justify-center items-center w-full h-full ">
            {' '}
            <p className="text-6xl">Home Page</p>
        </div>
    );
};

export default Home;
