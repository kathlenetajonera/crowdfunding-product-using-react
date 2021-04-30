import React from "react";
import ReactDOM from "react-dom";
import Overlay from "../Overlay";

const Modal = React.forwardRef(({ isModalOpen, setIsModalOpen, type, children }, ref) => {
    const completedPledge = type === "completed";

    return ReactDOM.createPortal(
        <>
        <div 
            ref={ref} 
            className={`modal ${completedPledge && "modal--completed"}`} 
            key="modal"
        >
            { children }
        </div>
        <Overlay type="normal" isActive={isModalOpen} setIsActive={setIsModalOpen} />
        </>,
        document.querySelector("#modal-root")
    );
})
 
export default Modal;