import { React, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <header>
      <span class="nav-title">
        <div class="text" data-text="NADER">
          NADER
        </div>
      </span>
      <div className="menu-icon" onClick={() => setClick(!click)}>
        {click ? <FaTimes /> : <GiHamburgerMenu />}
      </div>
      <nav>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="nav-title" smooth={true} duration={500}>
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={700}>
              <a>PROJECTS</a>
            </Link>
          </li>
          <li>
            <Link to="teamContainer" smooth={true} duration={700}>
              <a href="/">TEAM</a>
            </Link>
          </li>
          <li>
            <Link to="wrapper" smooth={true} duration={700}>
              <a href="/">CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
