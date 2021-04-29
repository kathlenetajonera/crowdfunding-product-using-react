import { useState } from "react";
import Navbar from "./nav/Navbar";
import Overlay from "./Overlay";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Overlay type="gradient" isActive={isMenuOpen} setIsActive={setIsMenuOpen} />
        </header>
    );
}
 
export default Header;