import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../index.css";

function Header() {
    const navRef = useRef();

    const showHeader = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header className="Main_Header">
            <h3 className="Logo">Invitame<span>YA</span></h3>
            <nav className="Main_nav" ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My work</a>
                <a href="/#">Blog</a>
                <a href="/#">About me</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showHeader}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showHeader}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header;