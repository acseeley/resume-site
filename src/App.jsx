import { useState } from "react";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState("default");
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const [activeSkill, setActiveSkill] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  console.log("Active Skill:", activeSkill);


  return (
    <div data-theme={theme}>
      <div className="app">
        <div className="sidebar">
          <div style={{ flex: 1 }}>
            <h1>Adam Seeley</h1>
            <p><strong>Junior Software Developer</strong></p>
            <p>Experienced with web development, software development, and data engineering.</p>

            <div className="button-group">
              <button
                className="btn"
                onClick={() => setShowAbout(prev => !prev)}
              >
                {showAbout ? "Portfolio" : "About Me"}
              </button>

              <a
                href="/AdamSeeley_Resume.pdf"
                download="AdamSeeley_Resume.pdf"
                className="btn"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="contact-footer">
            <Contact />
          </div>
        </div>

        <div className="main">
          {showAbout ? (
            <About />
          ) : (
            <>
              <Education />
              <Experience activeSkill={activeSkill} />
              <Projects activeSkill={activeSkill} />
              <Skills activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
            </>
          )}
        </div>
      </div>

      <div
        className="theme-selector-wrapper"
        onMouseEnter={() => setShowThemeOptions(true)}
        onMouseLeave={() => setShowThemeOptions(false)}
      >
        <div className={`theme-selector ${showThemeOptions ? "expanded" : ""}`}>
          🎨
          {showThemeOptions && (
            <div className="theme-inline-options">
              <button onClick={() => setTheme("default")}>Default</button>
              <button onClick={() => setTheme("alt1")}>Green + Gold</button>
              <button onClick={() => setTheme("alt2")}>Jazz</button>
              <button onClick={() => setTheme("alt3")}>Black/Gray/White</button>
              <button onClick={() => setTheme("rose")}>Rose + Sky</button>
            <button onClick={() => setTheme("soft-rose")}>Soft Rose</button>
            <button onClick={() => setTheme("natural")}>Natural</button>
            <button onClick={() => setTheme("sunset")}>Sunset</button>
            <button onClick={() => setTheme("earthy")}>Earthy</button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
