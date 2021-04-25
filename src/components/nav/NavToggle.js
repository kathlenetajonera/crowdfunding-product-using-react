const NavToggle = ({ isMenuOpen, setIsMenuOpen }) => {
    const handleToggle = () => setIsMenuOpen(!isMenuOpen);

    return ( 
        <div className="nav__toggle" onClick={handleToggle}>
            <span className="nav__bar nav__bar--first" />
            <span className="nav__bar nav__bar--mid" />
            <span className="nav__bar nav__bar--last" />
        </div>
    );
}
 
export default NavToggle;