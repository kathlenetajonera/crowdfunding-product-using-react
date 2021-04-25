const Button = ({ type, label }) => {
    return (
        <button className={`button button--${type}`}>
            { label }
        </button>
    );
}
 
export default Button;