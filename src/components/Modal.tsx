interface ModalProps {
  openModal: number;
  children: any;
}

const Modal = ({ children, openModal }: ModalProps) => {
  return <div className="w-auto border border-black">{children}</div>;
};

export default Modal;
