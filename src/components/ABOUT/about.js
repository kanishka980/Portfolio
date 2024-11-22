import React, { useEffect, useRef, useState } from "react";
import './about.css';
import eduimage from '../../assets/WIN.png';
import background from '../../assets/back.jpg';

const About = () => {
  const qualifications = [
    { id: 1, title: "B.Tech in AI & Data Science", description: "Focused on Machine Learning, AI, and Big Data", year: "2025" },
    { id: 2, title: "Senior Secondary Education", description: "Science Stream (PCM)", year: "2020" },
    { id: 3, title: "High School", description: "General education focusing on Science and Math", year: "2018" },
  ];

  const qualificationRefs = useRef([]);
  const imageRef = useRef(null);
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const viewportHeight = window.innerHeight;
  const [imageScale, setImageScale] = useState(1);

  
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        
        if (rect.top < windowHeight && rect.bottom > 0) {
          const percentageOut = Math.max(0, 1 - rect.top / windowHeight); 
          const newScale = Math.max(0.5, 1 - percentageOut * 0.5);
          setImageScale(newScale);
        }
      setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate zoom and translate position for each qualification based on scroll position
  const calculateTransform = (index) => {
    const element = qualificationRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Zoom factor: zoom in when it is closer to the center, zoom out as it moves away
      const centerDistance = Math.abs((elementTop + elementBottom) / 2 - viewportHeight / 2); // Distance from the center of the viewport
      const zoomFactor = Math.max(1 - centerDistance / 600, 0.8);  // Adjust zoom factor here

      // Translate factor: translate the element to the center of the viewport
      const translateY = Math.max(-centerDistance / 3, -150);  // Move the element toward the center

      return {
        transform: `scale(${zoomFactor}) translateY(${translateY}px)`,
        opacity: zoomFactor > 0.8 ? 1 : 0.7,  // Fade effect based on zoom
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'  // Smooth transition
      };
    }
    return {};
  };

  return (
    <section id="about">
      <h2 className="section-title">My Educational Journey</h2>
      <div className="container">
        <div className="image-container">
          <img ref={imageRef} src={eduimage} alt="Profile" className="profile-image" style={{
              transform: `scale(${imageScale})`,
              transition: 'transform 0.2s ease-out',
            }} />
        </div>
        <div className="education-container">
          {qualifications.map((qualification, index) => (
            <div
              key={qualification.id}
              className="qualification-item"
              ref={el => qualificationRefs.current[index] = el}
              style={calculateTransform(index)}  
            >
              <h3>{qualification.title}</h3>
              <p>{qualification.year}</p>
              <p>{qualification.description}</p>
            </div>
          ))}
        </div>
      </div>  
    </section>
  );
}

export default About;
