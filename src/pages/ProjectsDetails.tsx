// hooks
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// components
import ProjectMembersList from '../components/Projects/ProjectMembersList';
import PrimaryLayout from '../layout/PrimaryLayout';
import Typography from '../components/ui/Typography';
import Loader from '../components/ui/loader/Loader';

// graphql
import { GET_PROJECT } from '../graphql/query';

// types, interfaces && enums
import { IGetProject } from '../types/Project';
import {
    RouteEnum,
    TypographyVariantEnum,
    FontSizeEnum,
    FontWeightEnum,
} from '../enums';

// utils && helpers
import { firstLetterUpperCase } from '../utils';
import Tasks from '../components/Tasks/drag-and-drop/Tasks';

const ProjectsDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { loading, error, data } = useQuery<IGetProject>(GET_PROJECT, {
        variables: { projectId: params.projectId },
    });

    if (loading) {
        return <Loader label="Chargement..." />;
    }

    return (
        <>
            <PrimaryLayout
                title={firstLetterUpperCase(data?.project?.name as string)}
                showCTA
                labelCTA="Retourner à la liste des projets"
                onClickCTA={() => {
                    navigate(RouteEnum.PROJECTS);
                }}
            >
                <div className="flex flex-col justify-center items-center w-full h-full ">
                    <Typography
                        variant={TypographyVariantEnum?.H6}
                        color="text-primary-main"
                        className="mt-2"
                        fontSize={FontSizeEnum['SM']}
                    >
                        {data?.project?.description}
                    </Typography>
                </div>

                <div className="w-full flex justify-start flex-col pl-10 my-1.5 mt-8">
                    <Typography
                        variant={TypographyVariantEnum?.H3}
                        color="text-primary-main"
                        className="mt-2 font-poppins"
                        fontSize={FontSizeEnum['2XL']}
                        fontWeight={FontWeightEnum.BOLD}
                    >
                        Membres du projet :
                    </Typography>

                    <ProjectMembersList />
                </div>

                <Tasks tasks={data?.project?.tasks} />
            </PrimaryLayout>
        </>
    );
};

export default ProjectsDetails;
