import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="relative block p-1 text-center shadow overflow-hidden border border-gray-100 rounded-lg">
      {children}
    </div>
  );
};

export default Modal;
