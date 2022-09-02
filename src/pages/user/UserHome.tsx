import { useQuery } from '@apollo/client';
import { ClockIcon } from '@heroicons/react/solid';
import { GET_ALL_PROJECTS } from '../../queries/query';
import HeaderGlobal from '../../components/headers/HeaderGlobal';
import TitleBlock from '../../components/titles/TitleBlock';
import CardSmall from '../../components/cards/CardSmall';
import CardAddSmall from '../../components/cards/CardAddSmall';

const UserHome = () => {
    const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

    if (loading) {
        return <p>loading</p>;
    }

    if (error) {
        return <p>error</p>;
    }

    return (
        <section className="pl-32 pr-10">
            <div className="px-4 py-16 max-w-screen-xl sm:px-6 lg:px-8">
                <div className="max-w-xl">
                    <HeaderGlobal dateIsShow />
                </div>

                <div className="grid grid-cols-12 gap-2">
                    <div className="col-start-1 col-end-13 md:col-end-9">
                        <TitleBlock
                            title="Récemment consultés"
                            icon={
                                <ClockIcon className="h-5 w-5 text-primary-main mr-4" />
                            }
                        />

                        <hr className="col-start-1 col-end-13 h-1 w-24 bg-primary-main mt-2 mb-4" />

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {data.allProjects
                                .slice(0, 3)
                                .map((project: any) => (
                                    <CardSmall title={project?.name} />
                                ))}

                            <div className="flex flex-col items-center justify-center bg-white border-2 border-primary-main rounded p-6">
                                <CardAddSmall />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserHome;
