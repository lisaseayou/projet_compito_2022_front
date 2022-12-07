import { useQuery } from '@apollo/client';
import React from 'react';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../../enums';
import { GET_ALL_USERS } from '../../../graphql/query';
import { IGetAllUsers, IUser } from '../../../types/User';
import { getNumberItems, getPlural } from '../../../utils';
import SelectInput, { OptionsType } from '../form/SelectInput';
import Icon from '../Icons/Icon';
import Loader from '../loader/Loader';
import Typography from '../Typography';

type PanelContentProps = {
    title: string;
    content?: string;
    list?: any;
    number?: number;
};
const PanelContent = ({ title, content, list }: PanelContentProps) => {
    const { loading, error, data } = useQuery<IGetAllUsers>(GET_ALL_USERS);

    if (loading) {
        return <Loader label="Chargement..." />;
    }

    const getUsersOptions = () => {
        const listName = list?.map((user: any) => user.name);
        return data?.allUsers?.filter((user) => !listName?.includes(user.name));
    };

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
                    {content
                        ? title
                        : `${getPlural(list, title)} ${getNumberItems(
                              list,
                              true
                          )}`}
                </Typography>
            </div>

            {content && (
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
            )}

            {list && (
                <div className="mt-2">
                    <div className="p-2">
                        <SelectInput
                            id="users"
                            name="users"
                            placeholder="Liste des utilisateurs"
                            options={
                                getUsersOptions()?.map((user: IUser) => ({
                                    id: user.id,
                                    value: user.name,
                                    label: user.name,
                                })) as OptionsType[]
                            }
                            isClearable
                            isMultiple
                        />
                        {list.map((user: any) => (
                            <Typography
                                variant={TypographyVariantEnum?.P}
                                color="text-primary-main"
                                fontSize={FontSizeEnum.XS}
                                fontWeight={FontWeightEnum.NORMAL}
                                textTransform={TextTransformEnum.NORMAL}
                                className="w-full"
                            >
                                {user.name}
                            </Typography>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default PanelContent;
