import { useEffect, useState } from "react";

export default function About() {
  const [about, setAbout] = useState(null);
  const [movieIndex, setMovieIndex] = useState(0);

  useEffect(() => {
    fetch("data/about.json")
      .then(res => res.json())
      .then(data => setAbout(data));
  }, []);

  if (!about) return null;

  const nextMovie = () => {
    setMovieIndex((prev) => (prev + 1) % about.movies.length);
  };

  const prevMovie = () => {
    setMovieIndex((prev) => (prev - 1 + about.movies.length) % about.movies.length);
  };

  return (
    <section className="section">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="photo-section">
          {about.photos.map((src, i) => (
            <img
              key={i}
              src={`images/${src}`}
              alt={`Photo ${i + 1}`}
              className="about-photo"
            />
          ))}
        </div>

        <div className="about-text">
          <p>{about.text}</p>

          <div className="favorite-teams">
            <h3>Favorite Sports Teams</h3>
            <p>Coming soon: Track current records and stats here.</p>
          </div>
        </div>
      </div>

      {about.movies?.length > 0 && (
        <div className="carousel">
          <button className="carousel-btn" onClick={prevMovie}>◀</button>
          <img
            src={`images/${about.movies[movieIndex]}`}
            alt={`Movie ${movieIndex + 1}`}
            className="carousel-image"
          />
          <button className="carousel-btn" onClick={nextMovie}>▶</button>
        </div>
      )}
    </section>
  );
}
