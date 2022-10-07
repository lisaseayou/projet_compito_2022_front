import { useState } from 'react';
import CardsListProject from '../components/Projects/CardsListProject';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '../components/ui/Typography';
import {
    ButtonVariantEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../enums';
import Button from '../components/ui/Buttons/Button';
import ModalCreateProject from '../components/modals/ModalCreateProject';

const Projects = () => {
    const [showAddProject, setShowAddProject] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col items-center px-4 py-6 sm:py-14 max-w-screen-xl min-h-screen sm:pl-10">
                <div className="max-w-7xl">
                    <div className="flex flex-col sm:flex-row items-start sm:justify-between mt-3 mb-12">
                        <div></div>
                        <Typography
                            variant={TypographyVariantEnum?.H2}
                            color="text-primary-main"
                            fontSize={'text-3xl sm:text-4xl'}
                            textTransform={TextTransformEnum.NORMAL}
                            className="mb-4 sm:mb-0"
                        >
                            Liste des projets
                        </Typography>

                        <Button
                            variant={ButtonVariantEnum.CTA}
                            onClick={() => setShowAddProject(true)}
                        >
                            Ajouter un projet
                        </Button>
                    </div>

                    <div className="flex justify-center w-full">
                        <CardsListProject />
                    </div>

                    <ToastContainer />
                </div>
            </div>

            <ModalCreateProject
                show={showAddProject}
                setShow={() => setShowAddProject(!showAddProject)}
            />
        </>
    );
};

export default Projects;
