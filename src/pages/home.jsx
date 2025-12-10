// src/pages/home.jsx
import "./home.css";
import ProfileImage from "../assets/Images/profile_pic.jpeg";

export default function Home() {
  return (
    <div className="page page-dark home-page">
      <div className="home-layout">
        {/* LEFT: HERO COPY */}
        <div className="home-left">
          <div className="hero-tag">PORTFOLIO · RYANN TAY</div>
          <h1 className="hero-title">
            Where <span className="accent-text">people, systems, and AI</span> turn complex people workflows
            into simple, intelligent systems.
          </h1>
          <p className="hero-subtitle">
            I bridge <span className="accent-text">HR, Business Analytics, Finance</span> and <span className="accent-text">AI</span> to design systems, tools, 
            and experiences that scale people, not just processes.
          </p>

          <div className="hero-meta-row">
            <div className="hero-meta-block">
              <div className="meta-label">Current Focus</div>
              <div className="meta-value">
                HR Tech · People Analytics · AI Prototyping
              </div>
            </div>
            <div className="hero-meta-block">
              <div className="meta-label">Location</div>
              <div className="meta-value">Singapore · NUS BBA</div>
            </div>
          </div>

          <div className="pill-row">
            <span className="pill">HR TECH</span>
            <span className="pill">PEOPLE ANALYTICS</span>
            <span className="pill">GEN AI</span>
            <span className="pill">UX & PRODUCT</span>
          </div>
        </div>

        {/* RIGHT: PROFILE IMAGE IN TECH FRAME */}
        <div className="home-right">
          <div className="hero-frame-card">
            <div className="hero-frame-inner">
              <div className="hero-image-wrap">
                <img
                  src={ProfileImage}
                  alt="Ryann Tay"
                  className="hero-image"
                />
              </div>
              <div className="hero-caption">
                <div className="hero-caption-title">Ryann Tay</div>
                <div className="hero-caption-sub">
                  Business · Analytics · HR Tech · AI
                </div>
              </div>
            </div>
            <div className="hero-frame-footer">
              <span className="hero-chip">NUS Business</span>
              <span className="hero-chip">Triple Specialisation</span>
              <span className="hero-chip">Tech x Cars x People</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}