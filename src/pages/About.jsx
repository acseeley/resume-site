import { useState, useEffect } from "react";
import "../index.css";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("data/about.json")
      .then(res => res.json())
      .then(data => setAboutData(data));
  }, []);

  if (!aboutData) return <p>Loading...</p>;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % aboutData.movies.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + aboutData.movies.length) % aboutData.movies.length);
  };

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>{aboutData.text}</p>

      <div className="photo-section">
        {aboutData.photos.map((src, i) => (
          <img key={i} src={src} alt={`Photo ${i + 1}`} className="about-photo" />
        ))}
      </div>

      <h3>Favorite Movies</h3>
      <div className="carousel">
        <button onClick={prevSlide} className="carousel-btn">←</button>
        <img src={aboutData.movies[current]} alt="Favorite Movie" className="carousel-image" />
        <button onClick={nextSlide} className="carousel-btn">→</button>
      </div>
    </div>
  );
}
