import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Only apply scroll spy when on the home page
    if (location.pathname === "/") {
      const interval = setInterval(() => {
        setActiveSection(window.currentActiveSection || "home");
      }, 100);

      return () => clearInterval(interval);
    } else {
      // When on another page, use pathname instead
      setActiveSection(location.pathname.replace("/", ""));
    }
  }, [location.pathname]);

  const getClass = (name) =>
    activeSection === name ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="nav-inner">

        <div className="nav-logo">Ryann Tay</div>

        <nav className="nav-links">

          {/* Home (scroll spy + route) */}
          <a href="/#home" className={getClass("home")}>
            Home
          </a>

          {/* Other pages (route-based highlight) */}
          <Link to="/about" className={getClass("about")}>
            About
          </Link>

          <Link to="/skills" className={getClass("skills")}>
            Skills
          </Link>

          <Link to="/education" className={getClass("education")}>
            Education
          </Link>

          <Link to="/work" className={getClass("work")}>
            Work
          </Link>

          <Link to="/projects" className={getClass("projects")}>
            Projects
          </Link>

          <Link to="/contact" className={getClass("contact")}>
            Contact
          </Link>

        </nav>
      </div>
    </header>
  );
}