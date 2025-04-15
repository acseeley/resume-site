import { useEffect, useState } from "react";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState(null);
  const [copiedField, setCopiedField] = useState("");

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 1500);
  };

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
        <a href={`mailto:${contactInfo.email}`} title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <div className="contact-details">
        <p onClick={() => copyToClipboard(contactInfo.phone, "phone")} className="copy-target">
          <strong>Phone:</strong> {contactInfo.phone}
          {copiedField === "phone" && <span className="copied-msg">Copied!</span>}
        </p>
        <p onClick={() => copyToClipboard(contactInfo.email, "email")} className="copy-target">
          <strong>Email:</strong> {contactInfo.email}
          {copiedField === "email" && <span className="copied-msg">Copied!</span>}
        </p>
      </div>
    </div>
  );
}
