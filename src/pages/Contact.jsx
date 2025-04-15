import { useEffect, useState } from "react";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    fetch("data/contact.json")
      .then(res => res.json())
      .then(data => setContactInfo(data));
  }, []);

  if (!contactInfo) return <div>Loading...</div>;

  return (
    <div>
      <h2>Contact</h2>
      <div className="socials">
        <a href="https://linkedin.com/in/adam-seeley-a2a157156" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="https://github.com/acseeley" target="_blank" rel="noreferrer" title="GitHub">
            <i className="devicon-github-original"></i>
        </a>
        <a href="https://facebook.com/adam.seeley.1738" target="_blank" rel="noreferrer" title="Facebook">
            <i className="devicon-facebook-plain"></i>
        </a>
        <a href="mailto:your.email@example.com" title="Email">
            <i className="fas fa-envelope"></i>
        </a>
        </div>
    </div>
  );
}
