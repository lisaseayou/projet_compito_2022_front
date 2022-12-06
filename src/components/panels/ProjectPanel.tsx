import { XCircleIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextLineHeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Icon from '../ui/Icons/Icon';
import Typography from '../ui/Typography';

type ProjectPanelProps = {
    show: boolean;
    title: string;
    description: string;
    onClose: () => void;
};

const ProjectPanel = ({
    show,
    title,
    description,
    onClose,
}: ProjectPanelProps) => {
    return (
        <>
            {show && (
                <aside className="relative w-80 h-full" aria-label="Sidebar">
                    <button
                        className="absolute top-4 right-4 z-50"
                        onClick={onClose}
                    >
                        <Icon
                            variant={IconEnum.X}
                            opacity={OpacityEnum.OPACITY_100}
                            className="w-6 h-6 cursor-pointer"
                            onClick={onClose}
                        />
                    </button>

                    <div className="h-full overflow-y-auto py-4 px-3 bg-primary-ultraLight rounded">
                        <Typography
                            variant={TypographyVariantEnum?.H3}
                            color="text-primary-main"
                            fontSize={'text-xl'}
                            fontWeight={FontWeightEnum.BOLD}
                            textTransform={TextTransformEnum.NORMAL}
                            className="mt-0 w-full text-center pr-10"
                            leading={TextLineHeightEnum.TIGHT}
                        >
                            {title}
                        </Typography>

                        <hr className="mt-4" />

                        <div className="flex gap-1 items-center mt-4">
                            <Icon
                                variant={IconEnum.DOCUMENT_TEXT}
                                opacity={OpacityEnum.OPACITY_100}
                                className="w-5 h-5"
                            />
                            <Typography
                                variant={TypographyVariantEnum?.H5}
                                color="text-primary-main"
                                fontSize={'text-lg'}
                                fontWeight={FontWeightEnum.SEMIBOLD}
                                textTransform={TextTransformEnum.NORMAL}
                                className="w-full"
                            >
                                Description
                            </Typography>
                        </div>

                        <div className="mt-2">
                            <div className="bg-primary-ultraLight p-2">
                                <Typography
                                    variant={TypographyVariantEnum?.P}
                                    color="text-primary-main"
                                    fontSize={FontSizeEnum.XS}
                                    fontWeight={FontWeightEnum.NORMAL}
                                    textTransform={TextTransformEnum.NORMAL}
                                    className="w-full"
                                >
                                    {description}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </aside>
            )}
        </>
    );
};

export default ProjectPanel;
