// hooks
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// components
import PrimaryLayout from '../layout/PrimaryLayout';
import Loader from '../components/ui/loader/Loader';
import Tasks from '../components/Tasks/drag-and-drop/Tasks';
import ModalCreateTask from '../components/modals/ModalCreateTask';

// graphql
import { GET_PROJECT } from '../graphql/query';

// types, interfaces && enums
import { IGetProject } from '../types/Project';
import { IconEnum, OpacityEnum, RouteEnum } from '../enums';

// utils && helpers
import { firstLetterUpperCase } from '../utils';
import Icon from '../components/ui/Icons/Icon';
import ProjectPanel from '../components/panels/ProjectPanel';

const ProjectsDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [showModalNewTask, setShowModalNewTask] = useState(false);
    const [status, setStatus] = useState('');
    const [expandInfoTask, setExpandInfoTask] = useState(true);
    const [showPanel, setShowPanel] = useState(false);

    const { loading, error, data } = useQuery<IGetProject>(GET_PROJECT, {
        variables: { projectId: params.projectId },
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
                <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-between mb-6">
                        <button
                            className="flex items-center rounded-b-md p-1 hover:bg-primary-ultraLight"
                            onClick={() => setExpandInfoTask(!expandInfoTask)}
                        >
                            <Icon
                                variant={
                                    expandInfoTask
                                        ? IconEnum.EYE
                                        : IconEnum.EYE_OFF
                                }
                                opacity={OpacityEnum.OPACITY_100}
                                className="w-4 h-4 cursor-pointer"
                                onClick={() =>
                                    setExpandInfoTask(!expandInfoTask)
                                }
                            />
                        </button>

                        <div className="relative">
                            <button
                                className="flex items-center rounded-b-md p-1 hover:bg-primary-ultraLight"
                                onClick={() => setShowPanel(!showPanel)}
                            >
                                <Icon
                                    variant={IconEnum.DOTS_HORIZONTAL}
                                    opacity={OpacityEnum.OPACITY_100}
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => setShowPanel(!showPanel)}
                                />
                            </button>
                        </div>
                    </div>
                    <Tasks
                        tasks={data?.project?.tasks}
                        projectId={data?.project?.id}
                        showModalNewTask={showModalNewTask}
                        setShowModalNewTask={setShowModalNewTask}
                        setStatus={setStatus}
                        expandInfoTask={expandInfoTask}
                    />
                </div>
                <div
                    className={`absolute z-10 h-screen top-0 bottom-0 ${
                        showPanel ? 'right-0' : 'left-0'
                    }`}
                >
                    <ProjectPanel
                        id={data?.project?.id as string}
                        show={showPanel}
                        onClose={() => setShowPanel(false)}
                        title="Infos"
                        description={data?.project?.description as string}
                        users={data?.project?.users}
                    />
                </div>
            </PrimaryLayout>

            <ModalCreateTask
                show={showModalNewTask}
                setShow={() => setShowModalNewTask(!showModalNewTask)}
                projectId={data?.project?.id}
                status={status}
            />
        </>
    );
};

export default ProjectsDetails;
