import  { useState } from 'react';
import "./Navbar2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="logo">SwastiBharat</div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Center - Navigation Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Task</a>
        <a href="#">Projects</a>
        <a href="#">Quick Errands</a>
        <a href="#">Marketplace</a>
      </div>

      {/* Right Side - Login Button and Icons */}
      <div className="rightside">
        <FontAwesomeIcon className="icon" icon={faGlobe} />
        <button className="login-button">
          Login<FontAwesomeIcon className="iconn" icon={faUser} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
