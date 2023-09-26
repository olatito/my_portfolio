import logo from "../../assets/IMG/AboutMe..png";
import { useState } from "react";
import "./NavBar.css";
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';


function NavBar() {

  const [ toggleSideBar, setToggleSideBar ] = useState(false)

  const toggleMenu = () =>{
    setToggleSideBar(!toggleSideBar)
  }
  return (
    <div className="mobile-nav-bar">
      {
        toggleSideBar &&
        <nav className="mobile-nav-bar-links">
          <ul className="nav-bar-links">
            <li className="nav-link">
              <a href="/">HOME</a>
            </li>
            <li className="nav-link">
              <a onClick={toggleMenu} href="/#about">ABOUT</a>
            </li>
            <li className="nav-link">
              <a onClick={toggleMenu} href="/#service">SERVICE</a>
            </li>
            <li className="nav-link">
              <a onClick={toggleMenu} href="/#portfolio">PORTFOLIO</a>
            </li>
            <li className="nav-link">
              <a onClick={toggleMenu} href="/#experience">EXPERIENCE</a>
            </li>
            <li className="nav-link">
              <a onClick={toggleMenu} href="/#contact">BLOG</a>
            </li>
            <li className="nav-link">
              <a onClick={toggleMenu} href="/#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      }
      <div className="nav-bar">
      <div className="inner-nav-bar">
        <div className="nav-bar-logo">
          <img src={logo} alt="nav logo" />
          <i onClick={toggleMenu} className="nav-close-btn">
            {
              !toggleSideBar ? <HiOutlineMenuAlt3/> : <AiOutlineClose />
            }
            
            </i>
        </div>

        <nav>
          <ul className="nav-bar-links">
            <li className="nav-link">
              <a href="/">HOME</a>
            </li>
            <li className="nav-link">
              <a href="/#about">ABOUT</a>
            </li>
            <li className="nav-link">
              <a href="/#service">SERVICE</a>
            </li>
            <li className="nav-link">
              <a href="/#portfolio">PORTFOLIO</a>
            </li>
            <li className="nav-link">
              <a href="/#experience">EXPERIENCE</a>
            </li>
            <li className="nav-link">
              <a href="/#contact">BLOG</a>
            </li>
            <li className="nav-link">
              <a href="/#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      
      </div>
    </div>
    
  );
}

export default NavBar;
