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
              <a href="/">ABOUT</a>
            </li>
            <li className="nav-link">
              <a href="/">SERVICE</a>
            </li>
            <li className="nav-link">
              <a href="/">PORTFOLIO</a>
            </li>
            <li className="nav-link">
              <a href="/">RESUME</a>
            </li>
            <li className="nav-link">
              <a href="/">BLOG</a>
            </li>
            <li className="nav-link">
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
