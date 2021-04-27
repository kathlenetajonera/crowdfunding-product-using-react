const Button = ({ type, label, handleClick }) => {

    console.log("button");
    return (
        <button className={`button button--${type}`} onClick={handleClick}>
            { label }
        </button>
    );
}
 
export default Button;