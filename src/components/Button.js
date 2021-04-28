const Button = ({ type, label, handleClick }) => {
    return (
        <button className={`button button--${type}`} onClick={handleClick}>
            { label }
        </button>
    );
}
 
export default Button;