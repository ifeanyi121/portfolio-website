import React, { useState, useEffect } from "react";
import "../index.css";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Change 100 to adjust when navbar sticks
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav  className={`navbar ${isSticky ? "sticky" : ""}`}>
            <h1><a href="#profile">Obi-Wan-Kanobi</a></h1>
            <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
            <ul className={menuOpen ? 'active' : ''}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
