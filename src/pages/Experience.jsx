import { useEffect, useState } from "react";

export default function Experience({ activeSkill }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("data/experience.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <section className="section">
      <h2>Work Experience</h2>

      {jobs.map((job, index) => (
        <div
          key={index}
          className={`job-box ${activeSkill && job.skills.includes(activeSkill) ? "highlighted" : ""}`}
          data-skills={job.skills.join(",")}
        >
          <h3>{job.title}</h3>
          <p><em>{job.date}</em></p>
          <ul>
            {job.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="hover-details">
            {job.skills.join(", ")}
          </div>
        </div>
      ))}
    </section>
  );
}
