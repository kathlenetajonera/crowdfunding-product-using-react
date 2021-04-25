import Button from "./Button";
import bookmarkIcon from "../images/icon-bookmark.svg";
import useResize from "../hooks/useResize";

const BookmarkBtn = () => {
    const { windowWidth } = useResize();

    return (
        <div className="bookmark">
            <img className="bookmark__icon" src={bookmarkIcon} alt="icon"/>
            { windowWidth >= 768 && <Button type="bookmark" label="Bookmark" />}
        </div>
    );
}
 
export default BookmarkBtn;