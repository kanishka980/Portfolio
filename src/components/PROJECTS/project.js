import React from 'react';
import './project.css'; 
import project1Image from '../../assets/skin.png'; 
import project2Image from '../../assets/tweets.png';
import project3Image from '../../assets/pbi.png'; 

const projectsData = [
    {
        name: 'Skin Disease Classification Using CNN',
        description: ' Deployed a machine learning model that can accurately classify various skin diseases based on images. Implemented data augmentation and transfer learning techniques to enhance model performance and generalization.',
        link: 'https://github.com/kanishka980/skin-disease-classification-using-CNN-', 
        image: project1Image
    },
    {
        name: 'Twitter Sentiment Analysis',
        description: 'Devised sentiment analysis on a dataset comprising 27,481 tweets using Python NLP tools . Attained a 95% accuracy rate in classifying sentiments, resulting in a 0.14% improvement in identifying positive, negative, and neutral sentiments',
        link: 'https://github.com/kanishka980/sentiment-analysis',
        image: project2Image
    },
    {
        name:' Data Analysis using Power BI ',
        description: 'Established a Power BI dashboard for Amazon Sales, showcasing real-time metrics on revenue, units sold, average order value, and customer ratings.  This tool revolutionized decision-making processes, providing instant insights for strategic growth initiatives and operational enhancements.  ',
        link: 'https://github.com/kanishka980/superstore-sales-analysis-using-power-BI', 
        image: project3Image
    }
];

const ProjectSection = () => {
    return (
        <section id="projects">
        <div className="project-section">
            <h2>Projects</h2>
            <div className="projects-list">
                {projectsData.map((project, index) => (
                    <div className="project-item" key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.name} className="project-image" />
                        </a>
                        <p className='clicktext'> Click on image to view </p>
                        <div className="project-details">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default ProjectSection;

