// hooks
import { Link } from "react-router-dom";

// components
import Typography from "../ui/Typography";

// types, interfaces & enums
import {
  FontSizeEnum,
  FontWeightEnum,
  IconEnum,
  OpacityEnum,
  TextTransformEnum,
  TypographyVariantEnum,
} from "../../enums";

// images & icons
import Icon from "../ui/Icons/Icon";
import ModalUpdateProject from "./ModalUpdateProject";
import { IProject } from "../../types/Project";

type ActionBaseProps = {
  dataId: string;
  className?: string;
  setShowAction: (value: boolean) => void;
  setShowDeleteData: (value: boolean) => void;
  project?: IProject;
};
const ActionBase = ({
  dataId,
  className,
  setShowAction,
  setShowDeleteData,
  project,
}: ActionBaseProps) => {
  return (
    <div
      className={`absolute z-10 w-auto bg-white rounded-md drop-shadow-primary ${
        className ?? ""
      }`}
    >
      <Icon
        variant={IconEnum.PENCIL_OUTLINE}
        opacity={OpacityEnum.OPACITY_100}
        className="w-4 h-4 text-primary-main mr-2"
      />
      <ModalUpdateProject project={project} />
      {/* <Typography
                    variant={TypographyVariantEnum?.H5}
                    color="text-primary-main"
                    className="mb-0"
                    fontSize={FontSizeEnum.XS}
                    fontWeight={FontWeightEnum.NORMAL}
                    textTransform={TextTransformEnum.NORMAL}
                >
                    Modifier
                </Typography> */}

      <button
        className="flex items-center rounded-b-md p-4 hover:bg-primary-ultraLight"
        onClick={() => {
          setShowDeleteData(true);
          setShowAction(false);
        }}
      >
        <Icon
          variant={IconEnum.TRASH_OUTLINE}
          opacity={OpacityEnum.OPACITY_100}
          className="w-4 h-4 text-red-500 mr-2"
        />
        <Typography
          variant={TypographyVariantEnum?.H5}
          color="text-red-500"
          className="mb-0"
          fontSize={FontSizeEnum.XS}
          fontWeight={FontWeightEnum.NORMAL}
          textTransform={TextTransformEnum.NORMAL}
        >
          Supprimer
        </Typography>
      </button>
    </div>
  );
};

export default ActionBase;
