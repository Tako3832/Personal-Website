// src/pages/contact.jsx
import {
  FiMail,
  FiLinkedin,
  FiMapPin,
  FiCoffee,
  FiUsers,
  FiFileText,
} from "react-icons/fi";

import ResumePDF from "../assets/Resume/Ryann_Updated CV.pdf";   // ✅ Import the PDF
import "./contact.css";

export default function Contact() {
  return (
    <div className="page page-dark contact-page">
      <div className="contact-inner">

        {/* ============================================================
            HEADER
        ============================================================ */}
        <div className="contact-header">
          <div>
            <div className="contact-label">CONTACT</div>

            <h1 className="contact-title">
              Let’s connect and build something meaningful.
            </h1>

            <p className="contact-subtitle">
              Whether it's HR, analytics, AI tools, workflow design, or new ideas — 
              I’m always open to conversations, collaborations, and problem-solving.
            </p>

            <div className="contact-pill-row">
              <span className="contact-pill">HR / People Analytics</span>
              <span className="contact-pill">AI & Automation</span>
              <span className="contact-pill">Strategy & Org Design</span>
            </div>
          </div>
        </div>

        {/* ============================================================
            MAIN CONTACT GRID
        ============================================================ */}
        <div className="contact-grid">

          {/* -------------------- Reach Me -------------------- */}
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-icon-badge"><FiMail /></div>
              <h2>Reach Me</h2>
            </div>

            <div className="contact-row">
              <FiMail className="contact-row-icon" />
              <div>
                <div className="contact-row-label">Email</div>
                <a href="mailto:ryanntay.work@gmail.com" className="contact-row-link">
                  ryanntay.work@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-row">
              <FiLinkedin className="contact-row-icon" />
              <div>
                <div className="contact-row-label">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/ryann-tay"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-row-link"
                >
                  linkedin.com/in/ryann-tay
                </a>
              </div>
            </div>

            <div className="contact-row">
              <FiMapPin className="contact-row-icon" />
              <div>
                <div className="contact-row-label">Location</div>
                <p className="contact-row-text">
                  Singapore · Available for remote collaborations
                </p>
              </div>
            </div>
          </div>

          {/* -------------------- What I’m Open To -------------------- */}
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="contact-icon-badge"><FiCoffee /></div>
              <h2>What I’m Open To</h2>
            </div>

            <ul className="contact-list">
              <li>HR / People Analytics roles or collaborations</li>
              <li>Strategic HR, org design, or workflow optimisation</li>
              <li>AI × HR process automation, prototypes, or tools</li>
              <li>Product / UX / research collaborations</li>
              <li>Coffee chats about careers, tech, or cars</li>
            </ul>
          </div>

          {/* -------------------- Why Reach Out -------------------- */}
          <div className="contact-card contact-card-span">
            <div className="contact-card-header">
              <div className="contact-icon-badge"><FiUsers /></div>
              <h2>Why Reach Out</h2>
            </div>

            <p className="contact-body">
              I enjoy solving problems across people, systems, and data — and
              I’m always open to exploring ideas, projects, and collaborations
              that create real impact.
            </p>

            <p className="contact-body">
              If you're building something, improving something, or curious about
              how HR, analytics, and AI intersect — I’d love to chat.
            </p>

            <div className="contact-tag-row">
              <span className="contact-tag">Ideas & Brainstorms</span>
              <span className="contact-tag">Side Projects</span>
              <span className="contact-tag">Career Conversations</span>
            </div>
          </div>

        </div>

        {/* ============================================================
            RESUME DOWNLOAD SECTION
        ============================================================ */}
        <div className="resume-section">
          <h2 className="resume-header">My Resume</h2>

          <div className="resume-card">

            {/* Left Text Column */}
            <div className="resume-left">
              <div className="resume-title">Download My Resume</div>

              <p className="resume-desc">
                A complete overview of my experience across HR, analytics,
                AI systems, product thinking, and workflow optimisation.
              </p>

              <div className="resume-meta">
                <span className="resume-pill">Updated 2025</span>
                <span className="resume-updated">Latest version</span>
              </div>

              {/* ✅ Reliable PDF Download */}
              <a
                href={ResumePDF}
                download="Ryann_Tay_Resume.pdf"
                className="resume-btn"
              >
                <FiFileText className="resume-btn-icon" />
                Download Resume
              </a>
            </div>

            {/* Right Icon Column */}
            <div className="resume-preview">
              <div className="resume-icon-box">
                <FiFileText className="resume-icon" />
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================
            FOOTNOTE
        ============================================================ */}
        <div className="contact-status">
          <span>Based in Singapore (GMT+8)</span>
          <span className="contact-dot" />
          <span>Typical reply: within 1–2 days</span>
        </div>

      </div>
    </div>
  );
}