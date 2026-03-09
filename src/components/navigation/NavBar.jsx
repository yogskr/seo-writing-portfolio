import "./NavBar.css";
import { navData } from "../../data";
import { Link } from "react-router-dom";

export function NavBar({ showNavBar, currentPath }) {
  return (
    <nav className={showNavBar ? "navContainer with-bg" : "navContainer"}>
      <ul className="navbar">
        {navData.links.map((link) => (
          <li key={link.name}>
            <Link
              className={`navlink ${currentPath === link.url ? "active" : ""}`}
              to={link.url}
            >
              <i className={link.icon}></i>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
