import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavBar } from "./components/navigation/NavBar";
import "./App.css";

// Importing page components
import { Home } from "./pages/home/Home";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Contact } from "./pages/contact/Contact";
import { Resume } from "./pages/resume/Resume";

function pageDestinations() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavBar = ["/portfolio", "/resume", "/contact"].includes(
    location.pathname,
  );

  return (
    <>
      {pageDestinations()}
      {showNavBar && <NavBar showNavBar={showNavBar} currentPath={location.pathname} />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
