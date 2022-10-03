import React from 'react';
import { Link } from 'react-router-dom';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Icon from '../ui/Icons/Icon';
import Typography from '../ui/Typography';

type ActionBaseProps = {
    dataId: string;
    className?: string;
    setShowAction: (value: boolean) => void;
    setShowDeleteData: (value: boolean) => void;
};
const ActionBase = ({
    dataId,
    className,
    setShowAction,
    setShowDeleteData,
}: ActionBaseProps) => {
    return (
        <div
            className={`absolute z-10 w-auto bg-white rounded-md drop-shadow-primary ${
                className ?? ''
            }`}
        >
            <Link
                to={`/project/${dataId}/update`}
                className="flex items-center p-4 rounded-t-md border-b border-primary-secondary hover:bg-primary-ultraLight"
                onClick={() => setShowAction(false)}
            >
                <Icon
                    variant={IconEnum.PENCIL_OUTLINE}
                    opacity={OpacityEnum.OPACITY_100}
                    className="w-4 h-4 text-primary-main mr-2"
                />

                <Typography
                    variant={TypographyVariantEnum?.H5}
                    color="text-primary-main"
                    className="mb-0"
                    fontSize={FontSizeEnum.XS}
                    fontWeight={FontWeightEnum.NORMAL}
                    textTransform={TextTransformEnum.NORMAL}
                >
                    Modifier
                </Typography>
            </Link>

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
