// hooks
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";

// components
import CardProject from "./CardProject";
import NoResult from "../errors/NoResult";
import Loader from "../ui/loader/Loader";

// graphql
import { GET_PROJECT_BY_USER } from "../../graphql/query";

// types, interfaces & enums
import { IGetProjectsByUser, IProject } from "../../types/Project";
import { IUser } from "../../types/User";
import {
  TypographyVariantEnum,
  TextTransformEnum,
  FontWeightEnum,
} from "../../enums";

// images & icons
import NoResultImg from "../../assets/no-result.svg";

interface CardListProps {
  setShowAddProject: (value: boolean) => void;
}

const CardsList = ({ setShowAddProject }: CardListProps) => {
  const user: IUser = useSelector((state: any) => state.user);
  const [modalUpdateOrDeleteID, setModalUpdateOrDeleteID] = useState("");
  const [searchProject, setSearchProject] = useState("");

  const { loading, error, data } = useQuery<IGetProjectsByUser>(
    GET_PROJECT_BY_USER,
    {
      variables: { userId: user.id },
    }
  );

  if (loading) {
    return <Loader label="Chargement..." />;
  }

  if (error) {
    return <p>error</p>;
  }

  const handleSearchProject = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setSearchProject(value);
  };
  return (
    <div className="flex flex-col">
      {!data || data?.projectsByUser?.length > 1 ? (
        <div>
          <input
            type="text"
            name="searchBar"
            placeholder="Rechercher un projet"
            onChange={handleSearchProject}
            className="w-80 m-10 border border-red-900 p-3 rounded shadow-md mx-auto"
          ></input>
        </div>
      ) : null}
     <div className="flex justify-center">
      <div className="grid grid-cols-12 gap-6">
        {!data ||
          (data?.projectsByUser?.length > 0 ? (
            data?.projectsByUser
              ?.filter((project: IProject) => {
                return project?.name
                .charAt(0)
                .replace("é", "e")
                  .toLowerCase()
                  .includes(searchProject.toLowerCase());
              })
              .map((project: IProject) => (
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
          ))}
      </div>
      </div>
    </div>
  );
};

export default CardsList;
