import "./NavBar.css";
import { navData } from "../../data";
import { Link, useLocation } from "react-router-dom";

export function NavBar({ showNavBar, currentPath }) {
  // determine current path either from props or router
  const location = useLocation();
  const path = currentPath || location.pathname;

  // Hide the Home link when on the Home page.
  function shouldShowLink(link) {
    // Only hide the Home link if the current path is "/" and the link's url is "/"
    return !(path === "/" && link.url === "/");
  }
  const filteredLinks = navData.links.filter(shouldShowLink);

  return (
    <nav className={showNavBar ? "nav-container with-bg" : "nav-container"}>
      <ul className="navbar">
        {filteredLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`navlink ${path === link.url ? "active" : ""}`}
              to={link.url}
            >
              <i className={link.icon}></i>
              {!showNavBar && link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
