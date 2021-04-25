import { useEffect } from "react";
import useResize from "../../hooks/useResize";
import logo from "../../images/logo.svg";
import NavMenu from "./NavMenu";
import NavToggle from "./NavToggle";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
    const { windowWidth } = useResize();

    useEffect(() => {
        if (windowWidth >= 768) setIsMenuOpen(false)
    }, [windowWidth, setIsMenuOpen])

    return (
        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
            <a href="/" className="nav__logo-link">
                <img src={logo} alt="logo" className="nav__logo-img"/>
            </a>

            <NavToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <NavMenu />
        </nav>
    );
}
 
export default Navbar;