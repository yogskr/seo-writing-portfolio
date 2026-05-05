import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { NavBar } from "./components/navigation/NavBar";
import { Home } from "./pages/home/Home";
import { Work } from "./pages/work/Work";
import { Contact } from "./pages/contact/Contact";
import { Resume } from "./pages/resume/Resume";

// Route configuration
const routes = [
  { path: "/", element: <Home /> },
  { path: "/work", element: <Work /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact", element: <Contact /> },
];

// Pages that should show the navigation bar
const pagesWithNavBar = ["/work", "/resume", "/contact"];

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: -10,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 10,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const MotionDiv = motion.div;

function MainContent() {
  const location = useLocation();

  useEffect(() => {
    // Delay scroll to start after AnimatePresence animation begins
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 500);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <MotionDiv
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                {route.element}
              </MotionDiv>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavBar = pagesWithNavBar.includes(location.pathname);

  return (
    <div className="bg-snow-storm-nord6">
      <MainContent />
      {showNavBar && (
        <NavBar showNavBar={showNavBar} currentPath={location.pathname} />
      )}
    </div>
  );
}

export default function App() {
  // Scroll to top on initial app load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
