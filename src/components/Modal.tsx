interface ModalProps {
  openModal: number;
  children: any;
}

const Modal = ({ children }: ModalProps) => {
  return <div className="w-auto border border-black">{children}</div>;
};

export default Modal;
