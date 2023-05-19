import { React, useState } from "react";
import Logo from "./logo.png";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
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
        <div class="text" data-text="Nader">
          Nader
        </div>
      </span>
      <div className="menu-icon" onClick={() => setClick(!click)}>
        {click ? <FaTimes /> : <GiHamburgerMenu />}
      </div>
      <nav>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">PROJECTS</a>
          </li>
          <li>
            <a href="/">TEAM</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
