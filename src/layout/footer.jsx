// src/layout/Footer.jsx
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Ryann Tay · Personal Website
    </footer>
  );
}