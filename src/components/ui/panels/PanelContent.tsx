import React from 'react';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../../enums';
import Icon from '../Icons/Icon';
import Typography from '../Typography';

type PanelContentProps = {
    title: string;
    content: string;
};
const PanelContent = ({ title, content }: PanelContentProps) => {
    return (
        <>
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
                    {title}
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
                        {content}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default PanelContent;
