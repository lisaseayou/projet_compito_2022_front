import { FontSizeEnum, TypographyVariantEnum } from '../../enums';
import { formatDate } from '../../utils';
import Typography from '../ui/Typography';

type HeaderGlobalProps = {
    title: string;
    dateIsShow?: boolean;
};

const HeaderGlobal = ({ title, dateIsShow }: HeaderGlobalProps) => {
    return (
        <div className="col-start-1 col-end-8 flex flex-col justify-center items-start">
            <Typography
                variant={TypographyVariantEnum?.H1}
                color="text-primary-main"
                fontSize={FontSizeEnum['3XL']}
            >
                {title}
            </Typography>

            {dateIsShow && (
                <Typography
                    variant={TypographyVariantEnum?.H6}
                    color="text-primary-main"
                    className="mt-2"
                    fontSize={FontSizeEnum['SM']}
                >
                    Aujoud'hui nous sommes le{' '}
                    {formatDate(new Date(), 'dd MMMM yyyy')}
                </Typography>
            )}
        </div>
    );
};

export default HeaderGlobal;
