import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa"; 
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="img/logo.jpg" alt="Garden Girls Flowers Logo" className="logo-img" />
        <span className="brand-name">Garden Girls Flowers</span>
      </div>

      {/* Desktop Nav */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Leaf Icon */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <FaLeaf />
      </button>
    </nav>
  );
}

export default Navbar;