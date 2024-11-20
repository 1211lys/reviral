import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const element =
    typeof window !== "undefined" && document.querySelector(`#portal`);

  return element && children ? ReactDOM.createPortal(children, element) : null;
}

export default Modal;
