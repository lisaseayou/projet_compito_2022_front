import {
    FontSizeEnum,
    FontWeightEnum,
    TextTransformEnum,
    TypographyVariantEnum,
} from '../../../enums';
import Typography from '../Typography';
import './loader.css';
import SwingItem from './SwingItem';

type LoaderProps = {
    label: string;
};

const Loader = ({ label }: LoaderProps) => {
    return (
        <div
            aria-busy="true"
            aria-label="Loading"
            role="progressbar"
            className="absolute top-1/2 left-1/2 my-auto -mx-12"
        >
            <div className="swing">
                <SwingItem className="swing-l" />
                <SwingItem />
                <SwingItem />
                <SwingItem />
                <SwingItem />
                <SwingItem />
                <SwingItem className="swing-r" />
            </div>

            <Typography
                variant={TypographyVariantEnum?.P}
                color="text-primary-main"
                fontSize={FontSizeEnum.LG}
                textTransform={TextTransformEnum.NORMAL}
                fontWeight={FontWeightEnum.BOLD}
                className="mt-6 text-center"
            >
                {label}
            </Typography>
        </div>
    );
};

export default Loader;
