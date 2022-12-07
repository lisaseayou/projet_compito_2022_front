// @ts-nocheck
import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import {
    FontSizeEnum,
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../../enums';
import { UPDATE_USER_ON_PROJECT } from '../../../graphql/mutation';
import {
    GET_ALL_USERS,
    GET_LAST_PROJECTS_UPDATE_BY_USER,
    GET_PROJECT,
    GET_PROJECT_BY_USER,
} from '../../../graphql/query';
import { IGetAllUsers, IUser } from '../../../types/User';
import { getNumberItems, getPlural } from '../../../utils';
import SelectInput, { OptionsType } from '../form/SelectInput';
import Icon from '../Icons/Icon';
import Loader from '../loader/Loader';
import Typography from '../Typography';

type PanelContentProps = {
    id?: string;
    title: string;
    content?: string;
    list?: any;
    number?: number;
};
const PanelContent = ({ id, title, content, list }: PanelContentProps) => {
    const { loading, error, data } = useQuery<IGetAllUsers>(GET_ALL_USERS);

    const [updateUserToProject] = useMutation(UPDATE_USER_ON_PROJECT, {
        onCompleted: () => {},
        onError: () => {},
        refetchQueries: [GET_PROJECT],
    });

    if (loading) {
        return <Loader label="Chargement..." />;
    }

    const getUsersOptions = () => {
        const listName = list?.map((user: any) => user.name);
        return data?.allUsers
            ?.filter((user) => !listName?.includes(user.name))
            ?.map((user: IUser) => ({
                id: user.id,
                value: user.name,
                label: user.name,
            })) as OptionsType[];
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
                        {getUsersOptions().length ? (
                            <div className="mb-3">
                                <SelectInput
                                    id="users"
                                    name="users"
                                    placeholder="Liste des utilisateurs"
                                    options={getUsersOptions()}
                                    isClearable
                                    onChange={(user) => {
                                        updateUserToProject({
                                            variables: {
                                                data: {
                                                    userId: user?.id,
                                                },
                                                updateProjectId: id,
                                            },
                                        });
                                    }}
                                />
                            </div>
                        ) : null}
                        {list.map((user: any, index: number) => (
                            <div className="flex items-center">
                                {index === 0 && (
                                    <Icon
                                        variant={IconEnum.STAR}
                                        opacity={OpacityEnum.OPACITY_100}
                                        className="w-4 h-4 text-primary-main"
                                    />
                                )}

                                <Typography
                                    key={user.id}
                                    variant={TypographyVariantEnum?.P}
                                    color="text-primary-main"
                                    fontSize={FontSizeEnum.XS}
                                    fontWeight={FontWeightEnum.NORMAL}
                                    textTransform={TextTransformEnum.NORMAL}
                                    className={`w-full ${
                                        index > 0 ? 'ml-4' : 'ml-0'
                                    }`}
                                >
                                    {user.name}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default PanelContent;
