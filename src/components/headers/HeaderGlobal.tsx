import { formatDate } from '../../utils';
import Typography, { variantEnum } from '../ui/Typography';

type HeaderGlobalProps = {
    title: string;
    dateIsShow?: boolean;
};

const HeaderGlobal = ({ title, dateIsShow }: HeaderGlobalProps) => {
    return (
        <div className="col-start-1 col-end-8 flex flex-col justify-center items-start">
            <Typography
                variant={variantEnum?.H1}
                color="text-primary-main"
                fontSize="text-3xl"
            >
                {title}
            </Typography>

            {dateIsShow && (
                <Typography
                    variant={variantEnum?.H6}
                    color="text-primary-main"
                    className="mt-2"
                >
                    Aujoud'hui nous sommes le {formatDate('dd MMMM yyyy')}
                </Typography>
            )}
        </div>
    );
};

export default HeaderGlobal;
