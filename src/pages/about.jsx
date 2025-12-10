// src/pages/about.jsx
import "./about.css";

// Correct image imports
import techImg from "../assets/Images/techIII.jpeg";
import carsImg from "../assets/Images/964.jpg";
import peopleImg from "../assets/Images/people.jpeg";

export default function About() {
  return (
    <div className="page page-light about-page">

      {/* ------------------------ 2-COLUMN MAIN LAYOUT ------------------------ */}
      <div className="about-layout">

        {/* ---------------- LEFT SIDE CONTENT ---------------- */}
        <div className="about-left">
          <div className="about-label">PROFILE</div>

          <h1>Who I am beyond the resume.</h1>

          <p>
            I’m a final-year Business Administration student at the National
            University of Singapore, specialising in{" "}
            <strong>
              Business Analytics, Leadership & Human Capital Management, and Finance
            </strong>.
          </p>

          <p>
            I like building <strong>systems that quietly do the heavy lifting</strong> — 
            HR workflows that run themselves, dashboards that surface what matters, 
            and AI tools that make people faster, not replace them.
          </p>

          <p>
            Underneath it all, I’m driven by a mix of{" "}
            <strong>precision</strong> (from analytics and finance) and{" "}
            <strong>care for people</strong> (from HR and leadership). 
            That combination is how I approach teams, tools, and problems.
          </p>

          <div className="pill-row about-pills">
            <span className="pill">HR BUSINESS PARTNERING</span>
            <span className="pill">PEOPLE ANALYTICS</span>
            <span className="pill">AI PROTOTYPING</span>
            <span className="pill">ORG DESIGN</span>
          </div>
        </div>

        {/* ---------------- RIGHT SIDE SNAPSHOT CARD ---------------- */}
        <div className="about-right">
          <div className="tech-card-light about-card interactive-card">
            <div className="about-card-header">
              <span className="about-card-title">Snapshot</span>
              <span className="about-card-tag">NUS · BBA</span>
            </div>

            <div className="about-card-row">
              <span className="about-card-label">Tracks</span>
              <span className="about-card-value">
                Business Analytics, HR, Finance
              </span>
            </div>

            <div className="about-card-row">
              <span className="about-card-label">Current Role</span>
              <span className="about-card-value">
                HR Ops Advisor Project Intern · Bytedance (TikTok) Pte Ltd
              </span>
            </div>

            <div className="about-card-row">
              <span className="about-card-label">Space I Love</span>
              <span className="about-card-value">
                HR Tech, AI x Workflows, Performance-Centric Cultures
              </span>
            </div>

            <div className="about-card-row">
              <span className="about-card-label">Fun Intersection</span>
              <span className="about-card-value">
                Tech x Cars x People – Optimisation, Performance, Control.
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ------------------------ 3 IMAGES BELOW ------------------------ */}
      <div className="about-extra-media-zone">

        <div className="about-photo-card interactive-card">
          <img src={techImg} alt="Tech" className="about-photo" />
          <h3 className="about-photo-title">Tech</h3>
          <p className="about-photo-desc">
            Where ideas turn into workflows, prototypes, and AI systems that automate the boring and amplify the useful.
          </p>
        </div>

        <div className="about-photo-card interactive-card">
          <img src={carsImg} alt="Cars" className="about-photo" />
          <h3 className="about-photo-title">Cars</h3>
          <p className="about-photo-desc">
            A space for control, optimisation, and performance — the same traits that guide how I build systems.
          </p>
        </div>

        <div className="about-photo-card interactive-card">
          <img src={peopleImg} alt="People" className="about-photo" />
          <h3 className="about-photo-title">People</h3>
          <p className="about-photo-desc">
            The human side of performance — understanding behaviour, culture, and what enables people to grow.
          </p>
        </div>

      </div>

    </div>
  );
}