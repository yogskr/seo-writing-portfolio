import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavBar } from "./components/navigation/NavBar";
import { Home } from "./pages/home/Home";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Contact } from "./pages/contact/Contact";
import { Resume } from "./pages/resume/Resume";
import "./App.css";

// Route configuration
const routes = [
  { path: "/", element: <Home /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact", element: <Contact /> },
];

// Pages that should show the navigation bar
const pagesWithNavBar = ["/portfolio", "/resume", "/contact"];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function MainContent() {
  return (
    <main>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavBar = pagesWithNavBar.includes(location.pathname);

  return (
    <>
      <MainContent />
      {showNavBar && (
        <NavBar showNavBar={showNavBar} currentPath={location.pathname} />
      )}
    </>
  );
}

export default function App() {
  // Scroll to top on initial app load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
