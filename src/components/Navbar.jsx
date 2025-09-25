import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="img/logo.jpg" alt="Garden Girls Flowers Logo" className="logo-img" />
        <span className="brand-name">Garden Girls Flowers</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;