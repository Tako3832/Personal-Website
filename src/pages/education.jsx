// src/pages/education.jsx
import "./education.css";

export default function Education() {
  return (
    <div className="page page-light education-page">

      {/* Small Label */}
      <div className="edu-label">ACADEMIC FOUNDATION</div>

      {/* Header Section */}
      <div className="edu-header">
        <h1 className="edu-title">
          Integrating people, data, and financial strategy into a cohesive
          foundation for solving real organisational challenges.
        </h1>

        <div className="edu-intro">
          <p>
            My coursework in HR, Business Analytics, and Finance gives me the
            grounding to navigate comfortably between people, numbers, and
            strategy — and to treat projects as experiments backed by
            structure and data.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="edu-grid">

        {/* Main Degree Card (Option C - Pillar Style) */}
        <div className="edu-main-card">
          <div className="edu-main-icon">🎓</div>
          <div className="edu-main-title">
            Bachelor of Business Administration — National University of Singapore
          </div>
          <div className="edu-main-sub">
            Specialisations in Business Analytics (DBA), Leadership & Human Capital
            Management (MNO), and Finance (FIN).
          </div>
        </div>

        {/* Option B - Modern Notion-Style Cards */}
        <div className="edu-block">
          <div className="edu-icon">📊</div>
          <h2>Business Analytics</h2>
          <ul>
            <li>Descriptive Analytics with R</li>
            <li>Predictive Analytics in Business</li>
            <li>People Analytics & Data Storytelling</li>
          </ul>
        </div>

        <div className="edu-block">
          <div className="edu-icon">👥</div>
          <h2>Leadership & Human Capital Management</h2>
          <ul>
            <li>Leadership & Human Capital modules</li>
            <li>Negotiation & Conflict Management</li>
            <li>Leading in the 21st Century</li>
            <li>Managing Across Cultures</li>
          </ul>
        </div>

        <div className="edu-block">
          <div className="edu-icon">💰</div>
          <h2>Finance</h2>
          <ul>
            <li>Corporate Finance & Financial Markets</li>
            <li>Investment & Portfolio Management</li>
            <li>Financial Markets</li>
            <li>Sustainability in Finance</li>
          </ul>
        </div>

      </div>
    </div>
  );
}