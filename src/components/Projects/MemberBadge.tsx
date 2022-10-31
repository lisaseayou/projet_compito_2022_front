import Avatar from '../ui/avatar/Avatar';
import avatar1 from '../../assets/avatar/avatar-1.jpg';
import Typography from '../ui/Typography';
import { TypographyVariantEnum, FontSizeEnum, FontWeightEnum } from '../../enums';

export type Member = {
    name: string;
    role: string;
};

type MemberProps = {
    member: Member;
};

const MemberBadge = ({ member }: MemberProps) => {
    return (
        <>
            <div className="inline-flex items-center bg-gray-100 px-5 py-1.5 rounded-full mb-4">
                <Avatar src={avatar1} alt="user" />

                <div className="flex flex-col">
                    <Typography
                        variant={TypographyVariantEnum?.P}
                        color="text-primary-main"
                        className="mr-1 font-medium"
                        fontSize={FontSizeEnum.XS}
                        fontWeight={FontWeightEnum.BOLD}
                    >
                        {member.name}
                    </Typography>

                    <Typography
                        variant={TypographyVariantEnum?.P}
                        color="text-primary-main"
                        className="mr-1 font-medium"
                        fontSize={FontSizeEnum.XS}
                    >
                        {member.role}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default MemberBadge;
