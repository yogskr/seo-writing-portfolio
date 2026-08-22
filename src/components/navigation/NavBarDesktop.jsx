import { navData } from "../../data";
import { Link, useLocation } from "react-router-dom";

export function NavBarDesktop({ currentPath }) {
  const location = useLocation();
  const path = currentPath || location.pathname;

  return (
    <nav className="hidden lg:flex justify-between items-center px-20 py-4 col-span-10 bg-pollar-night-nord0 text-snow-storm-nord5 text-xl font-jetbrains-mono">
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
