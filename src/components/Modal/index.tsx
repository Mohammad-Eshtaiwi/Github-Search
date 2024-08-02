import { PropsWithChildren } from "react";
import classNames from "./modal.module.scss";
import { useModal } from "./modalContext";
const Modal = ({ children }: PropsWithChildren) => {
  const { modalState, modalActions } = useModal();
  const isOpenClass = modalState.isOpen ? classNames["open"] : "";
  return (
    <div className={`${classNames["modal-wrapper"]} ${isOpenClass}`}>
      <button
        className={`btn ${classNames.close}`}
        data-type="primary"
        data-rounded
        onClick={() => modalActions.closeModal()}
      >
        X
      </button>
      <div className={classNames.modal}>{children}</div>
    </div>
  );
};

export default Modal;
