import myImage from "./assets/myprofilepic.jpg";
import "./App.css";

function HomePage() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Ram Aryal</h1>
        <p>Full Stack Web Developer</p>
        <p>Cyber Security Analyst</p>

        <h4 style={{ marginTop: "1.5rem" }}>
          Let’s Build Your Dream App Together
        </h4>
        <h5>
          🔒 Secure, Scalable & Stunning Solutions <br />
          🎯 Expert in Frontend, Backend & Database Systems
        </h5>

        <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
          📞 Reach out today to bring your idea to life!
        </p>
      </div>

      <div className="hero-image">
        <img src={myImage} alt="Ram Aryal" />
      </div>
    </div>
  );
}

export default HomePage;
