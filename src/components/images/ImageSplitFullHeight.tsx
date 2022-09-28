type ImageSplitFullHeightProps = {
    src: string;
    classNameContainer?: string;
};
const ImageSplitFullHeight = ({
    src,
    classNameContainer,
}: ImageSplitFullHeightProps) => {
    return (
        <div
            className={`relative w-full md:w-2/5 lg:w-1/2 min-h-screen bg-primary-main ${
                classNameContainer ?? ''
            }`}
            style={{
                backgroundImage: `url(${src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '110%',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full min-h-screen bg-primary-main opacity-40" />
        </div>
    );
};

export default ImageSplitFullHeight;
