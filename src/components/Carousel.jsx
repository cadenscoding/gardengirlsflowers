import { useState, useEffect } from "react";

function Carousel() {
  const images = Array.from({ length: 15 }, (_, i) => `/img/flower${i + 1}.jpg`);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 7 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Flower ${i + 1}`}
            className={`carousel-image ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;