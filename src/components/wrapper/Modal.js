import ReactDOM from "react-dom";
import Overlay from "../Overlay";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {

    return ReactDOM.createPortal(
        <>
        <div className={`modal`}>
            { children }
        </div>
        <Overlay type="normal" isActive={isModalOpen} setIsActive={setIsModalOpen} />
        </>,
        document.querySelector("#modal-root")
    );
}
 
export default Modal;