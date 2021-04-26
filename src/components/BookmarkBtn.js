import { useEffect, useState } from "react";
import useResize from "../hooks/useResize";
import Button from "./Button";

const BookmarkBtn = () => {
    const { windowWidth } = useResize();
    const [isBookmarked, setIsBookmarked] = useState(false);
    const handleClick = () => setIsBookmarked(!isBookmarked);

    useEffect(() => {
        const savedStatus = localStorage.getItem("isBookmarked");

        if (savedStatus && savedStatus === "true") {
            setIsBookmarked(true);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("isBookmarked", isBookmarked);
    }, [isBookmarked])

    return (
        <div 
            className={`bookmark ${ isBookmarked ? 'bookmark--active' : '' }`} 
            onClick={handleClick}
        >
            <svg className="bookmark__icon" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <circle className="bookmark__circle" fill="#2F2F2F" cx="28" cy="28" r="28"/>
                <path className="bookmark__ribbon" fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/>
            </g>
            </svg>

            { windowWidth >= 768 && <Button type="bookmark" label="Bookmark" />}
        </div>
    );
}
 
export default BookmarkBtn;