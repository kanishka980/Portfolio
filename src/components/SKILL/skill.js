import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './skill.css';
import bg from '../../assets/dark2.jpg';

const SkillsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.skills-container');
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }

        // Track vertical scroll position
        if (rect.top < 0) {
          setScrollY(Math.abs(rect.top));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scaling effect starts reducing only after the user scrolls past the section
  const scaleValue = isInView ? Math.max(1 - scrollY / 1000, 0.8) : 1;
  const opacityValue = isInView ? Math.max(1 - scrollY / 800, 0.6) : 1;

  return (

    <section  id="skills" className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <motion.div
        className="skills-box"
        style={{ scale: scaleValue, opacity: opacityValue }}
        transition={{ duration: 0.3 }}
      >
        <div className="skills-section">
          <h3>Prgramming Languages</h3>
          
            <li>CPP</li>
            <li>HTML, CSS, Javascript</li>
            <li>Python</li>
            <li>SQL</li>

            <h3>Platforms</h3>
            <li>pycharm</li>
            <li>Jupyter Notebook</li>
            <li>Visual Studio Code</li>
            <li>Anaconda</li>
            <li>Google Colab</li>

            <h3>Operating System</h3>
          
            <li>Windows</li>
            <li>Linux</li>
            
          
          


        </div>
        <div className="divider"></div>
        <div className="skills-section">

        <h3>Data Science</h3>
          <li>Data visualisation</li>
          <li>Data cleaning</li>
         
          <li>Deep Learning</li>
          <li>Machine Learning</li>
          
          <h3>Tools</h3>
          <li>MS Excel</li>
          <li>Power BI</li>
          <li>Tableau</li>
          <li>MYSQL</li>
        
           
          
          
          

         

            <h3>Spoken Languages</h3>
            <li>English</li>
            <li>Hindi</li>
            <li>Japanese</li>
          

            </div>
            


      </motion.div>
      <motion.div
        className="skills-background-wrapper"
        style={{ scale: scaleValue }}
        transition={{ duration: 0.7 }}
      >
        <img src={bg} alt="Background" className="skills-background" />
      </motion.div>
    </section>
  );
};

export default SkillsSection;
