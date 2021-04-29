import { useEffect, useRef } from "react";

const Overlay = ({ type, isActive, setIsActive }) => {
    const overlayRef = useRef();

    useEffect(() => {
        const clickOutsideListener = (e) => {
            if (e.target.contains(overlayRef.current)) {
                setIsActive(false);
            }
        }

        document.addEventListener("click", clickOutsideListener);

        return () => document.removeEventListener("click", clickOutsideListener);
    }, [isActive, setIsActive])

    return (
        <>
            {
                isActive &&
                <div className={`overlay overlay--${type}`} ref={overlayRef} />
            }
        </>
    );
}
 
export default Overlay;