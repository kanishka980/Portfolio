import './work.css';
import { useEffect } from 'react';

const Work = () => {
    const experiences = [
        {
            title: 'Data Scientist Intern',
            company: 'Indian Oil Corporation Limited (IOCL)',
            duration: 'July 2024 - August 2024',
            description: 'Worked on mitigating operational risks in refineries using predictive analysis. Focused on enhancing safety protocols and risk management by analyzing historical data and developing predictive models using logistic regression, decision tree, SVM, and random forest algorithms.',
        },
        {
            title: 'Data Analyst',
            company: 'Accenture (Job Simulation)',
            duration: 'September 2023 - September 2023',
            description: 'Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture. Cleaned, modeled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions. Formulated a comprehensive PowerPoint paired with a video presentation to effectively showcase key insights for internal Stakeholders, the materials received positive feedback from 100% of attendees during the review meeting.',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.experience-item');
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    item.classList.add('scroll-animation');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="work">
            <h2 className="section-title">My Work Experience</h2>
            <div className="container">
                <div className="experience-container">
                    {experiences.map((experience, index) => (
                        <div key={index} className="experience-item">
                            <h3>{experience.title}</h3>
                            <p>{experience.company}</p>
                            <p>{experience.duration}</p>
                            <p>{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
