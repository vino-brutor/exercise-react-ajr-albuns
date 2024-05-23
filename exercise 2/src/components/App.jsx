import React, { useState, useEffect, useRef } from 'react';
import Neotheater from './neotheater';
import Oko from './oko';
import Tmm from './tmm';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [arrowColor, setArrowColor] = useState('black');
  const totalSlides = 3; // Total de slides

  const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
      const colors = ['#0dcaf0', 'red', 'rgba(255, 153, 37, 0.979)', 'black']; // Cores para cada slide
      setArrowColor(colors[activeIndex] || 'black');
  }, [activeIndex]);

  return (
      <div className="d-flex justify-content-center align-items-center vh-100">
          <div id="carouselId" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                  {[...Array(totalSlides).keys()].map((index) => (
                      <li key={index} className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)}></li>
                  ))}
              </ol>
              <div className="carousel-inner" role="listbox">
                  <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                      <Neotheater />
                  </div>
                  <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                      <Oko />
                  </div>
                  <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                      <Tmm />
                  </div>
              </div>
              <a className="carousel-control-prev" role="button" onClick={prevSlide}>
                  <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: arrowColor }}></span>
              </a>
              <a className="carousel-control-next" role="button" onClick={nextSlide}>
                  <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: arrowColor }}></span>
              </a>
          </div>
      </div>
  );
}
