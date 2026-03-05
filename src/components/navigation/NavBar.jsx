import "./NavBar.css";
import { navData } from "../../data";
import { NavLink } from "react-router";

export function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        {navData.links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.url}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
