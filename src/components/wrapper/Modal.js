import ReactDOM from "react-dom";
import Overlay from "../Overlay";

const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
    return ReactDOM.createPortal(
        <>
        <div className="modal">
            { children }
        </div>
        <Overlay isActive={isModalOpen} setIsActive={setIsModalOpen} />
        </>,
        document.querySelector("#modal-root")
    );
}
 
export default Modal;