import { useQuery } from '@apollo/client';
import {
    ColorSwatchIcon,
    ClockIcon,
    ClipboardCheckIcon,
} from '@heroicons/react/solid';
import { ClockIcon as ClockIconOutline } from '@heroicons/react/outline';
import { GET_ALL_PROJECTS } from '../../queries/query';
import HeaderGlobal from '../../components/headers/HeaderGlobal';
import TitleBlock from '../../components/titles/TitleBlock';
import CardSmall from '../../components/cards/CardSmall';
import CardAddSmall from '../../components/cards/CardAddSmall';
import Work from '../../assets/work-pressure.svg';
import CardList from '../../components/cards/CardList';
import { useState } from 'react';
import ModalWithImage from '../../components/ui/modals/ModalCreateProject';
import Typography from '../../components/ui/Typography';
import { TypographyVariantEnum } from '../../enums';

const UserHome = () => {
    const { loading, error, data } = useQuery(GET_ALL_PROJECTS);
    const [showModal, setShowModal] = useState(false);

    if (loading) {
        return <p>loading</p>;
    }

    if (error) {
        return <p>error</p>;
    }

    const user = JSON.parse(localStorage.getItem('userLogged') as string);

    return (
        <>
            <section className="pl-32 pr-10">
                <div className="px-4 py-16 max-w-screen-xl sm:px-6 lg:px-8">
                    <div className="max-w-xl">
                        <HeaderGlobal
                            title={`Bonjour ${user?.name} `}
                            dateIsShow
                        />
                    </div>

                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-start-1 col-end-13 md:col-end-9">
                            <TitleBlock
                                title="Récemment consultés"
                                icon={
                                    <ClipboardCheckIcon className="h-5 w-5 text-primary-main mr-4" />
                                }
                            />

                            <hr className="col-start-1 col-end-13 h-1 w-24 bg-primary-main mt-2 mb-4" />

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {data.allProjects
                                    .slice(0, 3)
                                    .map((project: any) => (
                                        <CardSmall
                                            key={project?.id}
                                            title={project?.name}
                                        />
                                    ))}

                                <div className="flex flex-col items-center justify-center bg-white border-2 border-primary-main rounded p-6">
                                    <CardAddSmall
                                        onClick={() => setShowModal(true)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row-start-2 col-span-12 md:col-span-4">
                            <div className="flex flex-col mt-8">
                                <TitleBlock
                                    title="Taches pour aujourd'hui"
                                    icon={
                                        <ClockIcon className="h-5 w-5 text-primary-main mr-4" />
                                    }
                                />
                            </div>

                            <hr className="col-start-1 col-end-13 h-1 w-24 bg-primary-main mt-2 mb-4" />

                            <div className="flex flex-col">
                                {data.allProjects
                                    .slice(0, 4)
                                    .map((project: any) => (
                                        <CardList
                                            key={project?.id}
                                            title={project?.name}
                                            icon={
                                                <ColorSwatchIcon className="h-6 w-6 text-white" />
                                            }
                                        >
                                            <div className="flex items-center">
                                                <ClockIconOutline className="h-6 w-6 text-primary-main mr-1" />
                                                <Typography
                                                    variant={
                                                        TypographyVariantEnum.H6
                                                    }
                                                    color="text-primary-main"
                                                    fontSize="text-xs"
                                                    fontWeight="font-bold"
                                                    className="w-full"
                                                >
                                                    3h
                                                </Typography>
                                            </div>
                                        </CardList>
                                    ))}
                            </div>
                        </div>

                        <div
                            className="row-start-3 md:row-start-2 col-span-12 md:col-span-4 mt-12"
                            style={{
                                background: `url(${Work}) no-repeat`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>
                </div>
            </section>

            <ModalWithImage
                show={showModal}
                setShow={() => setShowModal(!showModal)}
            />
        </>
    );
};

export default UserHome;
