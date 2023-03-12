import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header id="header" >
            <h3><samp>AJAY</samp>FOLIO</h3>
            <nav ref={navRef}>
                <a href="/#" onClick={showNavbar}>Home</a>
                <a href="/#about" onClick={showNavbar}>About</a>
                <a href="/#skill" onClick={showNavbar}>Skill</a>
                <a href="/#project" onClick={showNavbar}>Project</a>
                <a href="/#contact" onClick={showNavbar}>Contact me</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
