import { useEffect, useState } from "react";

export default function Projects({ activeSkill }) {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="section">
      <h2>Projects</h2>
      {displayedProjects.map((proj, i) => (
  <div
    key={i}
    className={`project-box ${
      activeSkill &&
      proj.skills.some(skill => skill.toLowerCase() === activeSkill.toLowerCase())
        ? "highlighted"
        : ""
    }`}
  >
    <h3>{proj.title}</h3>
    <p>{proj.description}</p>
    <ul>
      {proj.bullets.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    <div className="hover-details">
      {proj.skills.join(", ")}
    </div>
  </div>
))}




      {projects.length > 3 && (
        <button className="button show-more" onClick={() => setShowAll(prev => !prev)}>
          {showAll ? "Show Less Projects" : "Show More Projects"}
        </button>
      )}
    </div>
  );
}
