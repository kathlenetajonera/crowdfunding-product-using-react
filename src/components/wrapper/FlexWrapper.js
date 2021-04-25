const FlexWrapper = ({ type, children }) => {
    return (
        <div className={`flex flex--${type}`}>
            { children }
        </div>
    );
}
 
export default FlexWrapper;