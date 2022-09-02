import Typography, { variantEnum } from '../../components/ui/Typography';
import { formatDate } from '../../utils/index';

const UserHome = () => {
    return (
        <section className="pl-32 pr-10">
            <div className="px-4 py-16 max-w-screen-xl sm:px-6 lg:px-8">
                <div className="max-w-xl">
                    <div className="col-start-1 col-end-8 flex flex-col justify-center items-start">
                        <Typography
                            variant={variantEnum?.H1}
                            color="text-primary-main"
                            fontSize="text-3xl"
                        >
                            Bonjour, Jerem
                        </Typography>

                        <Typography
                            variant={variantEnum?.H6}
                            color="text-primary-main"
                            className="mt-2"
                        >
                            Aujoud'hui nous sommes le{' '}
                            {formatDate('dd MMMM yyyy')}
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserHome;
