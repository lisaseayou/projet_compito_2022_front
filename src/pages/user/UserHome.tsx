// hooks
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

// components
import HeaderGlobal from '../../components/headers/HeaderGlobal';
import TitleBlock from '../../components/titles/TitleBlock';
import Typography from '../../components/ui/Typography';
import Alert from '../../components/ui/Alert';
import CardSmall from '../../components/cards/CardSmall';
import CardAddSmall from '../../components/cards/CardAddSmall';
import CardList from '../../components/cards/CardList';
import ModalWithImage from '../../components/modals/ModalProject';
import Loader from '../../components/ui/loader/Loader';
import { ToastContainer } from 'react-toastify';

// utils & helpers
import { firstLetterUpperCase } from '../../utils';

// graphql
import {
    GET_LAST_PROJECTS_UPDATE_BY_USER,
    GET_TASKS_BY_DAY_TODAY,
} from '../../graphql/query';

// types, interfaces & enums
import { IProject } from '../../types/Project';
import { IUser } from '../../types/User';
import { ITask } from '../../types/Task';
import { TypographyVariantEnum, AlertVariantEnum } from '../../enums';
import { IRootState } from '../../types';

// images & icons
import {
    ColorSwatchIcon,
    ClockIcon,
    ClipboardCheckIcon,
} from '@heroicons/react/solid';
import { ClockIcon as ClockIconOutline } from '@heroicons/react/outline';
import Work from '../../assets/work-pressure.svg';

const UserHome = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalUpdateOrDeleteID, setModalUpdateOrDeleteID] = useState('');

    const user: IUser = useSelector((state: IRootState) => state.user);

    const { loading, error, data } = useQuery(
        GET_LAST_PROJECTS_UPDATE_BY_USER,
        {
            variables: { limit: 3, userId: user.id },
        }
    );

    const {
        loading: tasksLoading,
        error: tasksError,
        data: tasksData,
    } = useQuery(GET_TASKS_BY_DAY_TODAY, {
        variables: { limit: 3, userId: user.id },
    });

    if (loading || tasksLoading) {
        return <Loader label="Chargement..." />;
    }

    if (error || tasksError) {
        return <p>error</p>;
    }

    return (
        <>
            <section className="pl-32 pr-10">
                <div className="px-4 py-16 max-w-screen-xl sm:px-6 lg:px-8">
                    <div className="max-w-xl">
                        <HeaderGlobal
                            title={`Bonjour ${firstLetterUpperCase(
                                user?.name
                            )} `}
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
                                {data.lastProjectByUser
                                    .slice(0, 3)
                                    .map((project: IProject) => (
                                        <CardSmall
                                            key={project?.id}
                                            project={project}
                                            modalUpdateOrDeleteID={
                                                modalUpdateOrDeleteID
                                            }
                                            setModalUpdateOrDeleteID={
                                                setModalUpdateOrDeleteID
                                            }
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
                                {tasksData.tasksByDay.length > 0 ? (
                                    tasksData.tasksByDay
                                        .slice(0, 4)
                                        .map((task: ITask) => (
                                            <CardList
                                                key={task?.id}
                                                task={task}
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
                                        ))
                                ) : (
                                    <Alert
                                        variant={AlertVariantEnum.FORM_ERROR}
                                        containerClassName="w-11/12 max-w-sm flex justify-center mx-0"
                                    >
                                        Aucune tache n'est assigné pour le
                                        moment.
                                    </Alert>
                                )}
                            </div>
                        </div>

                        {tasksData.tasksByDay.length > 0 && (
                            <div
                                className="row-start-3 md:row-start-2 col-span-12 md:col-span-4 mt-12"
                                style={{
                                    background: `url(${Work}) no-repeat`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                        )}
                    </div>
                </div>

                <ToastContainer />
            </section>

            <ModalWithImage
                show={showModal}
                setShow={() => setShowModal(!showModal)}
                title="Créer un projet"
            />
        </>
    );
};

export default UserHome;
