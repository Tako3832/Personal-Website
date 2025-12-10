// src/pages/skills.jsx
import { useState } from "react";
import "./skills.css";

import CertAIAgents from "../assets/Certs/AI agents Cert.pdf";
import CertAdvancedDA from "../assets/Certs/Final Advanced Data Analytics Cert.pdf";
import CertGoogleUX from "../assets/Certs/Google UX Design Cert.pdf";
import CertPeopleAnalytics from "../assets/Certs/People Analytics UPenn Cert.pdf";
import CertRAG from "../assets/Certs/RAG Spec Cert.pdf";
import CertGoogleBI from "../assets/Certs/Google Business Intelligence Cert.pdf";

import CertGooglePM from "../assets/Certs/Google Project Management.pdf";
import CertGoogleAPM from "../assets/Certs/Agile Project Management.pdf";
import CertIBMHR from "../assets/Certs/GenAI for HR Professionals.pdf";

export default function Skills() {
  /* ------------------------------ TECH SKILLS ------------------------------ */
  const technicalSkills = [
    {
      title: "(Generative) Artificial Intelligence",
      short:
        "Building AI systems that retrieve, reason, and act to automate real-world workflows.",
      full:
        "I design AI systems that retrieve, reason, and act — from RAG pipelines to fully agentic workflows.",
      list: [
        "RAG pipelines (LangChain / LlamaIndex / custom)",
        "Vector databases (Pinecone, Weaviate, Chroma)",
        "AI agents & multi-step reasoning flows",
        "Prompt engineering & system design",
        "Embedding optimisation & semantic search",
        "Model evaluation & hallucination reduction",
      ],
    },
    {
      title: "Data & Analytics",
      short:
        "Turning raw data into models, insights, and dashboards that drive confident decisions.",
      full:
        "I turn raw data into models, insights, and dashboards that drive decisions and measure outcomes & impact.",
      list: [
        "Python (pandas, scikit-learn, numpy)",
        "R for statistics & visualisation",
        "Predictive modelling (regression, classification)",
        "ML workflows & evaluation",
        "Dashboarding (Power BI)",
        "Statistical tests, modelling logic & insight storytelling",
      ],
    },
    {
      title: "HR Tech & Automation",
      short:
        "Designing automated HR workflows and people systems that reduce friction and unlock insights.",
      full:
        "I automate HR operations and build data-driven people systems that save time and unlock insights.",
      list: [
        "HRMS implementations (InfoTech, Times Software, Workday)",
        "LMS systems (Canvas, Alison, Talent)",
        "People analytics pipelines",
        "Power Automate workflow automation",
        "Data cleaning & HR data transformation",
        "HR digitalisation & dashboard processes",
      ],
    },
    {
      title: "UX & Product",
      short:
        "Creating flows, wireframes, and prototypes that transform complexity into intuitive experiences.",
      full:
        "I translate user needs into flows, wireframes, and prototypes that make complex experiences simple.",
      list: [
        "User research interviews",
        "Journey mapping & workflows",
        "Wireframes (low-fi & high-fi)",
        "Prototyping",
        "Usability testing",
        "UX frameworks & heuristics",
        "Front-end development (HTML, CSS, JavaScript)",
      ],
    },
  ];

  /* ------------------------------ PM SKILLS ------------------------------ */
  const pmSkills = [
    {
      title: "Project Management",
      short:
        "Executing structured workflows from planning → alignment → delivery.",
      full:
        "I manage structured project workflows from scoping and requirements gathering to stakeholder alignment, sprint execution, and delivery.",
      list: [
        "Project scoping & requirements gathering",
        "Agile & Scrum methodologies",
        "Kanban & workflow optimisation",
        "Roadmapping & milestone planning",
        "Risk identification & mitigation",
        "Cross-functional coordination",
      ],
    },
    {
      title: "Agile Delivery",
      short:
        "Applying Agile mindsets to drive iteration, speed, and continuous improvement.",
      full:
        "I apply Agile methodologies to improve iteration speed, collaboration, and clarity.",
      list: [
        "Scrum ceremonies",
        "Backlog management",
        "Writing user stories",
        "Iteration-driven improvement",
        "Velocity & burndown tracking",
      ],
    },
  ];

  /* ------------------------------ SOFT SKILLS ------------------------------ */
  const softSkills = [
    {
      title: "Leadership",
      short: "Guiding teams through ambiguity with clarity and structure.",
      full:
        "My leadership blends analytical problem-solving with people-centric guidance.",
      list: [
        "L&D strategy design",
        "Multilingual HRMS training",
        "Facilitating assessments (MLQ, personality tests)",
        "Curriculum co-development",
        "Structuring team workflows",
      ],
    },
    {
      title: "Stakeholder Management",
      short: "Aligning academic, product, HR, and technical perspectives.",
      full:
        "I manage expectations and translate insights across diverse stakeholders.",
      list: [
        "Leadership meeting insights",
        "HRIS migration alignment",
        "Translating technical workflows",
        "Expectation management",
      ],
    },
    {
      title: "Structured Thinking",
      short: "Turning ambiguity into structured, solvable components.",
      full:
        "I decompose complex problems into workflows, KPIs, and execution plans.",
      list: [
        "KPI-driven systems",
        "Workflow modelling",
        "AI resume screening logic",
        "Dashboard development",
      ],
    },
    {
      title: "Learning Agility",
      short: "Learning fast, experimenting, and iterating.",
      full:
        "I learn through rapid prototyping, experimentation, and iteration.",
      list: [
        "NLP + embeddings",
        "Python, R, GitHub",
        "API integrations",
        "Predictive analytics",
      ],
    },
  ];

  /* ------------------------------ CERTIFICATIONS ------------------------------ */
  const certCategories = [
    {
      id: "AI",
      label: "AI & Agents",
      items: [
        {
          title: "AI Agents & Agentic AI with Python & Generative AI",
          provider: "Vanderbilt University",
          pill: "AI & Agents",
          src: CertAIAgents,
        },
        {
          title: "RAG for Generative AI Applications",
          provider: "IBM",
          pill: "AI & RAG",
          src: CertRAG,
        },
      ],
    },
    {
      id: "DATA",
      label: "Data & Analytics",
      items: [
        {
          title: "Google Advanced Data Analytics Certificate",
          provider: "Google",
          pill: "Analytics",
          src: CertAdvancedDA,
        },
        {
          title: "Google Business Intelligence Certificate",
          provider: "Google",
          pill: "Analytics & BI",
          src: CertGoogleBI,
        },
      ],
    },
    {
      id: "PM",
      label: "Project & Management",
      items: [
        {
          title: "Google Project Management Certificate",
          provider: "Google",
          pill: "Project Mgmt",
          src: CertGooglePM,
        },
        {
          title: "Agile Project Management Certificate",
          provider: "Google",
          pill: "Agile",
          src: CertGoogleAPM,
        },
      ],
    },
    {
      id: "UX",
      label: "UX & Product",
      items: [
        {
          title: "Google UX Design Certificate",
          provider: "Google",
          pill: "UX & Product",
          src: CertGoogleUX,
        },
      ],
    },
    {
      id: "PEOPLE",
      label: "People & HR",
      items: [
        {
          title: "People Analytics",
          provider: "University of Pennsylvania",
          pill: "People Analytics",
          src: CertPeopleAnalytics,
        },
        {
          title: "GenAI for HR Professionals",
          provider: "IBM",
          pill: "AI for HR",
          src: CertIBMHR,
        },
      ],
    },
  ];

  /* ------------------------------ STATE ------------------------------ */
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedPmSkill, setSelectedPmSkill] = useState(null);
  const [selectedSoftSkill, setSelectedSoftSkill] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("AI");

  const activeCategory =
    certCategories.find((cat) => cat.id === selectedCategory) ||
    certCategories[0];

  /* ------------------------------ RENDER ------------------------------ */

  return (
    <section id="skills" className="section dark skills-section">
      <div className="section-inner">
        <p className="section-tag">CAPABILITIES</p>
        <h1 className="section-title">What I bring into teams and problems.</h1>

        <p className="skills-intro">
          A mix of technical, management, and people skills that lets me operate across HR,
          AI, analytics, and product.
        </p>

        {/* ---------------- TECH SKILLS ---------------- */}
        <h2 className="skills-header">Technical Skills</h2>
        <div className="skills-grid">
          {technicalSkills.map((skill, i) => (
            <button key={i} className="skill-card tech" onClick={() => setSelectedSkill(skill)}>
              <h3>{skill.title}</h3>
              <p>{skill.short}</p>
            </button>
          ))}
        </div>

        {/* ---------------- PROJECT MANAGEMENT ---------------- */}
        <h2 className="skills-header">Project & Management Skills</h2>
        <div className="skills-grid">
          {pmSkills.map((skill, i) => (
            <button key={i} className="skill-card tech" onClick={() => setSelectedPmSkill(skill)}>
              <h3>{skill.title}</h3>
              <p>{skill.short}</p>
            </button>
          ))}
        </div>

        {/* ---------------- SOFT SKILLS ---------------- */}
        <h2 className="skills-header">Soft Skills</h2>
        <div className="skills-grid">
          {softSkills.map((skill, i) => (
            <button key={i} className="skill-card soft" onClick={() => setSelectedSoftSkill(skill)}>
              <h3>{skill.title}</h3>
              <p>{skill.short}</p>
            </button>
          ))}
        </div>

        {/* ---------------- CERTIFICATIONS ---------------- */}
        <h2 className="skills-header">Professional Certifications</h2>

        <div className="cert-tabs">
          {certCategories.map((cat) => (
            <button
              key={cat.id}
              className={"cert-tab" + (cat.id === selectedCategory ? " active" : "")}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="cert-grid fade-in">
          {activeCategory.items.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-preview-wrap">
                <embed src={cert.src} className="cert-preview" />
              </div>
              <div className="cert-content">
                <div className="cert-meta-row">
                  <span className="cert-pill">{cert.pill}</span>
                  <span className="cert-provider">{cert.provider}</span>
                </div>
                <h3>{cert.title}</h3>
                <a href={cert.src} target="_blank" rel="noreferrer" className="cert-btn">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- MODALS ---------------- */}

      {/* Technical Modal */}
      {selectedSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{selectedSkill.title}</h2>
            <p className="modal-desc">{selectedSkill.full}</p>
            {selectedSkill.list.map((item, i) => (
              <div key={i} className="modal-list-item">{item}</div>
            ))}
            <button className="modal-close" onClick={() => setSelectedSkill(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* PM Modal */}
      {selectedPmSkill && (
        <div className="modal-overlay" onClick={() => setSelectedPmSkill(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{selectedPmSkill.title}</h2>
            <p className="modal-desc">{selectedPmSkill.full}</p>
            {selectedPmSkill.list.map((item, i) => (
              <div key={i} className="modal-list-item">{item}</div>
            ))}
            <button className="modal-close" onClick={() => setSelectedPmSkill(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Soft Skills Modal */}
      {selectedSoftSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSoftSkill(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{selectedSoftSkill.title}</h2>
            <p className="modal-desc">{selectedSoftSkill.full}</p>
            {selectedSoftSkill.list.map((item, i) => (
              <div key={i} className="modal-list-item">{item}</div>
            ))}
            <button className="modal-close" onClick={() => setSelectedSoftSkill(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}