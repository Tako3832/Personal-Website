// src/pages/work.jsx
import { useState } from "react";
import {
  FiCpu,
  FiTrendingUp,
  FiBookOpen,
  FiUsers,
} from "react-icons/fi";
import "./work.css";

const roles = [
  {
    icon: <FiCpu />,
    company: "OneSystems Technologies",
    role: "Management Trainee",
    type: "Internship / Full Time",
    period: "May 2025 – Aug 2025",
    description: (
      <>
        As Management Trainee, I <strong>designed and spearheaded OST’s company-wide L&D strategy</strong>,
        aligning digital learning with organisational core values while mapping training needs for
        <strong> 112 employees</strong>. I implemented <strong>6 department-level KPIs</strong> (including 100% quarterly
        completion and 10–20 learning hours) and built an LMS + mentorship model that earned
        <strong> C-suite approval</strong>.<br /><br />
        I also <strong>built an AI-driven resume-screening system</strong> using NLP + semantic search,
        enabling categorisation of <strong>100+ CVs in under 3 minutes at 95% accuracy</strong> — reducing
        HR review time by <strong>95%</strong>. I strengthened <strong>cross-functional alignment</strong> through direct project
        support with Nagasoft, TSG, SP, and S&M.
      </>
    ),
    tags: ["HR Tech", "Automation", "People Ops"],
  },
  {
    icon: <FiTrendingUp />,
    company: "OneSystems Technologies",
    role: "General HR Intern",
    type: "Internship",
    period: "May 2024 – Aug 2024",
    description: (
      <>
        I <strong>automated the home-leave workflow</strong> for 150+ employees using Power Automate,
        reducing processing time from 6 hours to <strong>under 4 hours</strong>. I also played a key role in
        <strong> HRIS migration</strong>, leveraging Excel VBA + Python for accurate employee-data transfer,
        reducing errors and shortening implementation time by <strong>30%</strong>.<br /><br />
        I additionally <strong>designed multilingual HRMS training</strong> for 150+ staff, enabling smooth adoption.
      </>
    ),
    tags: ["HRIS", "Process Design", "Onboarding"],
  },
  {
    icon: <FiBookOpen />,
    company: "NUS Business School",
    role: "Teaching Assistant · Talent Management",
    type: "Part-time",
    period: "Jan 2024 – May 2024",
    description: (
      <>
        I <strong>designed and facilitated assessments</strong> for 48 Master’s students (MLQ, personality
        tests, learning agility), strengthening team cohesion across 8 groups.  
        I <strong>co-developed curriculum</strong> covering TA, PM, L&D, and Retention, delivering interactive
        activities that drove a <strong>21% increase in class participation</strong>.  
        I also built a data-tracking system that generated <strong>insights improving learning outcomes</strong>.
      </>
    ),
    tags: ["People Development", "Facilitation", "Academia"],
  },
  {
    icon: <FiUsers />,
    company: "OneSystems Technologies",
    role: "General Business Intern",
    type: "Internship",
    period: "Dec 2021 – May 2022",
    description: (
      <>
        I supported <strong>HR operations, onboarding, documentation, and compliance</strong>, contributing
        to smoother people processes and foundational HR exposure that shaped my later path
        into HR tech and analytics.
      </>
    ),
    tags: ["HR Ops", "Compliance", "Support"],
  },
];

export default function Work() {
  const [openRole, setOpenRole] = useState(null);

  return (
    <div className="page page-dark work-page">
      {/* ================= HEADER ================= */}
      <div className="work-header">
        <div>
          <div className="work-label">EXPERIENCE</div>
          <h1 className="work-title">Where I’ve been putting this into practice.</h1>
        </div>

        <p className="work-intro">
          From HR and operations to people analytics and workflow automation, I’ve been building
          systems and structures that help teams perform better — while staying close to the
          people behind the work.
        </p>
      </div>

      {/* ================= EXPERIENCE GRID ================= */}
      <div className="work-grid">
        {roles.map((role, i) => (
          <button
            className="work-card"
            key={i}
            onClick={() => setOpenRole(role)}
          >
            <div className="work-card-icon">{role.icon}</div>

            <div className="work-card-header">
              <div>
                <div className="work-card-role">{role.role}</div>
                <div className="work-card-company">{role.company}</div>
              </div>
            </div>

            <div className="work-card-period">{role.period}</div>
            <div className="work-card-tags">
              {role.tags.map((tag, idx) => (
                <span className="work-tag-pill" key={idx}>
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* ================= MODAL POPUP ================= */}
      {openRole && (
        <div className="modal-overlay" onClick={() => setOpenRole(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{openRole.role}</h2>
            <div className="modal-company">{openRole.company}</div>
            <div className="modal-period">{openRole.period}</div>

            <p className="modal-description">{openRole.description}</p>

            <div className="modal-tags">
              {openRole.tags.map((t, i) => (
                <span className="work-tag-pill" key={i}>{t}</span>
              ))}
            </div>

            <button
              className="modal-close"
              onClick={() => setOpenRole(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}