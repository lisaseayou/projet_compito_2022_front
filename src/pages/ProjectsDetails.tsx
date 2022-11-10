// hooks
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

// components
import ProjectMembersList from "../components/Projects/ProjectMembersList";
import PrimaryLayout from "../layout/PrimaryLayout";
import Typography from "../components/ui/Typography";
import Loader from "../components/ui/loader/Loader";

// graphql
import { GET_PROJECT } from "../graphql/query";
import { ADD_TASK } from "../graphql/mutation";

// types, interfaces && enums
import { IGetProject } from "../types/Project";
import {
  RouteEnum,
  TypographyVariantEnum,
  FontSizeEnum,
  FontWeightEnum,
} from "../enums";

// utils && helpers
import { firstLetterUpperCase } from "../utils";
import Tasks from "../components/Tasks/drag-and-drop/Tasks";

const ProjectsDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery<IGetProject>(GET_PROJECT, {
    variables: { projectId: params.projectId },
  });

  const [AddTask] = useMutation(ADD_TASK, {
    onCompleted: () => {},
    onError: () => {},
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
            fontSize={FontSizeEnum["SM"]}
          >
            {data?.project?.description}
          </Typography>
        </div>

        <div className="w-full flex justify-start flex-col pl-10 my-1.5 mt-8">
          <Typography
            variant={TypographyVariantEnum?.H3}
            color="text-primary-main"
            className="mt-2 font-poppins"
            fontSize={FontSizeEnum["2XL"]}
            fontWeight={FontWeightEnum.BOLD}
          >
            Membres du projet :
          </Typography>

          <ProjectMembersList />
        </div>
        <button
          type="button"
          onClick={() =>
            AddTask({
              variables: {
                data: {
                  userId: "8f730a69-ae46-4514-9248-22f55217f6c7",
                  additionalSpentTime: [3],
                  advancement: 0,
                  dueDate: "01/12/2022",
                  initialSpentTime: 0,
                  projectId: "a0ab15ea-546b-49aa-b932-68aaab6fd564",
                  status: "à faire",
                  subject: "faire des boutons",
                },
              },
            })
          }
        >
        Ajouter une tache
        </button>
        <Tasks tasks={data?.project?.tasks} projectId={data?.project?.id} />
      </PrimaryLayout>
    </>
  );
};

export default ProjectsDetails;
