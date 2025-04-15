import { useState } from "react";

export default function Skills({ setActiveSkill, activeSkill }) {
  const skills = [
    "Python", "PHP", "JavaScript", "HTML", "CSS",
    "SQL", "Git", "Oracle", "ELT",
    "PowerShell", "JSON", "Linux", "Arduino",
    "Cypress", "Jira", "Azure", "Snowflake", "Gatling"
  ];

  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = (skill) => {
    setActiveSkill(skill === activeSkill ? "" : skill);
  };

  return (
    <section className="section">
      <h2>
        Skills & Technologies
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`skill-item ${activeSkill === skill ? "selected-skill" : ""}`}
            onClick={() => handleClick(skill)}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
