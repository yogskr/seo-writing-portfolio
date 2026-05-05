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

  // Apply background color for each navigation item
  const bgColors = ["bg-frost-nord9", "bg-aurora-nord14", "bg-aurora-nord12"];

  return (
    <nav
      className={
        showNavBar
          ? "bg-pollar-night-nord0"
          : "text-pollar-night-nord0 col-span-10 row-span-2 p-4 bg-snow-storm-nord6 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-medium"
      }
    >
      <ul
        className={
          showNavBar
            ? "flex items-center justify-evenly"
            : "flex items-center justify-between h-full w-full"
        }
      >
        {filteredLinks.map((link, index) => (
          <li key={link.id}>
            <Link
              id={link.id}
              className={`navlink ${showNavBar ? "" : `${bgColors[index % bgColors.length]} flex flex-col items-center p-1.5 w-20 border-2 border-solid border-pollar-night-nord3 rounded-lg`} ${path === link.url ? "active" : ""}`}
              to={link.url}
            >
              <i className={`text-2xl ${link.icon}`}></i>
              <p className="font-cascadia-code">{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
