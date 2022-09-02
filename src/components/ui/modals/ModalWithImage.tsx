import ReactModal from 'react-modal';

type ModalWithImageProps = {
    show: boolean;
    setShow: (value: boolean) => void;
};

const ModalWithImage = ({ show, setShow }: ModalWithImageProps) => {
    return (
        <div>
            <ReactModal isOpen={show} contentLabel="Minimal Modal Example">
                <button onClick={() => setShow(false)}>Close Modal</button>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
                maiores accusamus. Ab quas eaque quibusdam, recusandae placeat
                nihil laborum ipsa. Ab rem quia consectetur, laudantium optio
                porro? Quibusdam, illo consequuntur.
            </ReactModal>
        </div>
    );
};

export default ModalWithImage;
