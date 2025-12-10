// src/pages/projects.jsx
import "./projects.css";

// Example placeholder images (replace with your own if needed)
import ThumbAI from "../assets/Images/code.jpeg";
import ThumbRetail from "../assets/Images/scapeiv.jpeg";

const projects = [
  {
    title: "AI Resume Matcher",
    tags: ["AI", "HR", "In Progress"],
    thumbnail: ThumbAI,
    description:
      "Built an embeddings-based tool that compares CVs to job descriptions to surface alignment, possible fit, and red flags in minutes.",
    bullets: [
      "Uses NLP embeddings to quantify JD–CV similarity.",
      "Helps recruiters shortlist and understand fit faster.",
      "Designed to augment HR, not replace judgement."
    ]
  },
  {
    title: "Field Service Project · Youth Retail Concept",
    tags: ["Consulting", "Research"],
    thumbnail: ThumbRetail,
    description:
      "Led a consulting project to build a research-backed marketing and tenant-mix blueprint for a youth-centric retail concept.",
    bullets: [
      "Combined qual + quant research (interviews, surveys, TikTok scans).",
      "Developed positioning, storytelling pillars, and activations.",
      "Built frameworks to help the client think beyond campaigns."
    ]
  }
];

export default function Projects() {
  return (
    <div className="page page-light projects-page">
      {/* HEADER */}
      <div className="projects-header">
        <div>
          <div className="projects-label">PROJECTS</div>
          <h1 className="projects-title">
            My experimentation grounds for HR, AI, and Data Analytics.
          </h1>
        </div>

        <p className="projects-intro">
          I like projects that sit at the intersection of people and systems —
          where we can use data or AI to remove friction, unlock insight, or
          create experiences that feel intentional.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {projects.map((p, idx) => (
          <div className="project-card" key={idx}>
            {/* Thumbnail */}
            <div className="project-thumb">
              <img src={p.thumbnail} alt={p.title} />
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-tags">
                {p.tags.map((tag, i) => (
                  <span key={i} className="project-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>

              <ul className="project-list">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}