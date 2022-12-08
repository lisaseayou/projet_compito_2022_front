// hooks
import { useState } from 'react';

// components
import CardsListProject from '../components/Projects/CardsListProject';
import ModalCreateProject from '../components/modals/ModalCreateProject';
import PrimaryLayout from '../layout/PrimaryLayout';
import { ToastContainer } from 'react-toastify';

// styles
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
    const [showAddProject, setShowAddProject] = useState<boolean>(false);

    return (
        <>
            <PrimaryLayout
                title="Liste des projets"
                showCTA
                labelCTA="Ajouter un projet"
                onClickCTA={() => setShowAddProject(true)}
            >
                <div className="flex w-full">
                    <CardsListProject setShowAddProject={setShowAddProject} />
                </div>

                <ToastContainer />
            </PrimaryLayout>

            <ModalCreateProject
                show={showAddProject}
                setShow={() => setShowAddProject(!showAddProject)}
            />
        </>
    );
};

export default Projects;
