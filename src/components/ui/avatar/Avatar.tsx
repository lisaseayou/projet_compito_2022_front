type AvatarProps = {
    src: string;
    alt?: string;
    className?: string;
};

const Avatar = ({ src, alt, className }: AvatarProps) => {
    return (
        <div className={`rounded-full border-3 border-white ${className}`}>
            <img
                alt={alt}
                src={src}
                className="object-cover rounded-full h-8 w-8"
            />
        </div>
    );
};

export default Avatar;
