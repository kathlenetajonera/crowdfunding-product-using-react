import { useEffect, useState } from "react";

const useResize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const resizeListener = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", resizeListener);

        return () => window.removeEventListener("resize", resizeListener)
    })

    return { windowWidth }
}
 
export default useResize;