import "./NavBar.css";
import { navData } from "../../data";
import { Link } from "react-router-dom";

export function NavBar({ showNavBar }) {
  return (
    <nav className={showNavBar ? "navContainer with-bg" : "navContainer"}>
      <ul className="navbar">
        {navData.links.map((link) => (
          <li className="navlink" key={link.name}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
