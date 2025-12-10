// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar.jsx";
import Footer from "./layout/footer.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Skills from "./pages/skills.jsx";
import Education from "./pages/education.jsx";
import Work from "./pages/work.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="app">

      <Navbar />

      {/* PAGE WIDTH WRAPPER (this is what enforces 1680px) */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}