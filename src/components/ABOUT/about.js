import React from "react";
import './about.css';
import eduimage from '../../assets/image.webp'

const About = () => {
  const qualifications = [
    { id: 1, title: "B.Tech in AI & Data Science", description: "Focused on Machine Learning, AI, and Big Data", year: "2025" },
    { id: 2, title: "Senior Secondary Education", description: "Science Stream (PCM)", year: "2020" },
    { id: 3, title: "High School", description: "General education focusing on Science and Math", year: "2018" },
  ];

  

  return (
    <section id="about">
      <h2 className="section-title">My Educational Journey</h2>
      <div className="container">
        <div className="image-container">
          <img src={eduimage} alt="Profile" className="profile-image" />
        </div>
        <div className="education-container">
          {qualifications.map((qualification) => (
            <div key={qualification.id} className="qualification-item">
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
