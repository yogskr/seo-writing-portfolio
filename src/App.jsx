import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/hero/Hero";
import { NavBar } from "./components/navigation/NavBar";
import "./App.css";

// Importing page components
import { Home } from "./pages/home/Home";
import { Portfolio } from "./pages/portfolio/Portfolio";
import { Contact } from "./pages/contact/Contact";
import { Resume } from "./pages/resume/Resume";

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <header>
          <Hero />
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
