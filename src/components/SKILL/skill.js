import React from 'react';
import './skill.css'; 
import skillImage from '../../assets/skills.webp'; 

const skillsData = [
    {
        category: 'Data Science',
        skills: [
            { name: 'Machine Learning', percentage: 70 },
            { name: 'Deep Learning', percentage: 60 },
            { name: 'Power BI', percentage: 80 },
        ]
    },
    {
        category: 'Languages',
        skills: [
            { name: 'React', percentage: 60 },
            { name: 'HTML & CSS', percentage: 80 },
            { name: 'JavaScript', percentage: 70 },
            { name: 'C++', percentage: 85 },
            { name: 'Python', percentage: 80 },
            { name: 'SQL', percentage:70},
            {name:'OOPS', percentage:80}
        ]
    },
    
    {
        category: 'Frameworks',
        skills: [
            { name: 'Django', percentage: 70 },
            { name: 'React JS ', percentage: 50 },
        ]
    },
    {
        category: 'Operating System',
        skills: [
            { name: 'Linux', percentage: 60 },
            { name: 'Windows', percentage: 85 },
        ]
    },
   
];

const Skill = () => {
    return (
        <section id="skills">
        <div className="skill-section">
            <div className="skills-list">
                {skillsData.map((skillCategory, index) => (
                    <div className="skill-category" key={index}>
                        <h3>{skillCategory.category}</h3>
                        <div className="skill-items">
                            {skillCategory.skills.map((skill, idx) => (
                                <div className="skill-item" key={idx}>
                                    
                                    <div className="circle">
                                        <svg>
                                            <circle cx="30" cy="30" r="30"></circle>
                                            <circle cx="30" cy="30" r="30" 
                                                    style={{ strokeDashoffset: `calc(188 - (188 * ${skill.percentage}) / 100)` }}></circle>
                                        </svg>
                                        <div className="percentage">
                                            {skill.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="skill-image">
                <img src={skillImage} alt="Skills Illustration" />
            </div>
            
           
        </div>
        </section>
        
    );
};

export default Skill;
