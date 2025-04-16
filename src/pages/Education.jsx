import { useEffect, useState } from "react";

export default function Education() {
  const [education, setEducation] = useState(null);
  const [showCourses, setShowCourses] = useState(false);

  useEffect(() => {
    fetch("data/education.json")
      .then(res => res.json())
      .then(data => setEducation(data));
  }, []);

  if (!education) return null;

  return (
    <section className="section">
      <h2>Education</h2>
      <div>
        <h3>{education.school}</h3>
        <p><strong>{education.degree}</strong></p>
        <p>Graduated <strong>{education.date}</strong></p>
        <p>Concentration in <strong>{education.concentration}</strong></p>
        <p>Minors in <strong>{education.minors.join(", ")}</strong></p>
        <p>GPA: {education.gpa}</p>
      </div>

      <button className="button show-more" onClick={() => setShowCourses(prev => !prev)}>
        {showCourses ? "Hide Coursework" : "Display Coursework"}
      </button>

      {showCourses && (
        <div className="job-box" style={{ marginTop: "1rem" }}>
          {education.coursework.map((course, i) => (
            <p key={i}>
              <strong>{course.title}:</strong> {course.description}
            </p>
          ))}
          <p>Note: this does not include all courses, just those I find relevant to my career.</p>
        </div>
      )}
    </section>
  );
}
