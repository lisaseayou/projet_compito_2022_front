type ImageModalSplitFullHeightProps = {
    src: string;
    classNameContainer?: string;
};
const ImageModalSplitFullHeight = ({
    src,
    classNameContainer,
}: ImageModalSplitFullHeightProps) => {
    return (
        <div
            className={`relative w-full lg:w-1/2 h-full bg-primary-main ${
                classNameContainer ?? ''
            }`}
            style={{
                backgroundImage: `url(${src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '110%',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full h-full bg-primary-main opacity-40" />
        </div>
    );
};

export default ImageModalSplitFullHeight;
