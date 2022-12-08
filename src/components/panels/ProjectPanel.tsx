import {
    FontWeightEnum,
    IconEnum,
    OpacityEnum,
    TextLineHeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../enums';
import Icon from '../ui/Icons/Icon';
import PanelContent from '../ui/panels/PanelContent';
import Typography from '../ui/Typography';

type ProjectPanelProps = {
    id: string;
    show: boolean;
    title: string;
    description: string;
    users: any;
    onClose: () => void;
};

const ProjectPanel = ({
    id,
    show,
    title,
    description,
    users,
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

                    <div className="h-full overflow-y-auto py-4 px-3 bg-primary-ultraLight rounded border-l border-['#fafafd']">
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

                        <PanelContent
                            title="Description"
                            content={description}
                        />
                        <PanelContent title="Membre" list={users} id={id} />
                    </div>
                </aside>
            )}
        </>
    );
};

export default ProjectPanel;
