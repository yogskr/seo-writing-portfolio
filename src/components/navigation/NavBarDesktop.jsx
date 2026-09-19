import { navData } from "../../data";
import { Link, useLocation } from "react-router-dom";

export function NavBarDesktop({ currentPath, fixed = false }) {
  const location = useLocation();
  const path = currentPath || location.pathname;

  return (
    <nav
      className={`hidden lg:flex justify-between items-center px-56 py-4 col-span-12 bg-pollar-night-nord0 text-snow-storm-nord5 text-xl font-jetbrains-mono lg:col-span-12 lg:row-span-1 ${
        fixed ? "lg:fixed lg:left-0 lg:right-0 lg:top-0 lg:z-50" : ""
      }`}
    >
      <div className="flex space-x-6">
        {navData.links.map((link) => (
          <Link
            key={link.id}
            to={link.url}
            className={
              path === link.url
                ? "text-aurora-nord14 font-bold"
                : "cursor-pointer hover:text-aurora-nord13"
            }
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p className="text-lg font-cascadia-code text-frost-nord7">
        {navData.navTitle}
      </p>
    </nav>
  );
}
