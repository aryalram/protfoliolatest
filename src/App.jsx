import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import SkillsPage from "./SkillsPage";
import EducationPage from "./EducationPage";
import ContactPage from "./ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Header Navigation */}
        <header style={{ backgroundColor: "#29C5F6", padding: "1rem 0" }}>
          <nav
            style={{ display: "flex", justifyContent: "center", gap: "2rem" }}
          >
            <Link to="/" style={navStyle}>
              Home
            </Link>
            <Link to="/services" style={navStyle}>
              Services
            </Link>
            <Link to="/education" style={navStyle}>
              Education
            </Link>
            <Link to="/skills" style={navStyle}>
              Technical Skills
            </Link>
            <Link to="/contact" style={navStyle}>
              Contact
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "#f0f0f0",
            padding: "2rem 1rem",
            textAlign: "center",
            color: "#333",
            fontSize: "1rem",
          }}
        >
          <p>
            <strong>Contact Me</strong>
          </p>
          <p>
            <FaPhoneAlt /> 0274624658
          </p>
          <p>
            <FaEnvelope /> ramuaryal32@yahoo.com / ramuaryal1987@gmail.com
          </p>

          <div style={{ margin: "1rem 0", fontSize: "1.5rem" }}>
            <a
              href="https://github.com/aryalram"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ram-aryal-3b78b1336"
              target="_blank"
              rel="noreferrer"
              style={iconStyle}
            >
              <FaLinkedin />
            </a>
            <a href="mailto:ramuaryal32@yahoo.com" style={iconStyle}>
              <FaEnvelope />
            </a>
          </div>

          <p>© 2025 @ramaryal. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

const navStyle = {
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
};

const iconStyle = {
  margin: "0 0.75rem",
  color: "#333",
  transition: "color 0.3s",
};

export default App;
