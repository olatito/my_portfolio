import logo from "../../assets/IMG/AboutMe..png";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="inner-nav-bar">
        <div className="nav-bar-logo">
          <img src={logo} alt="nav logo" />
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
  );
}

export default NavBar;
