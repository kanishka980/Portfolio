import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from "framer-motion";
import bg from '../../assets/new_ng2.png';
import './intro.css';

const Intro = () => {
    const [scrollY, setScrollY] = useState(0);

    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    const scaleValue = Math.max(1 - scrollY / 1000, 0.7); 

    return (
        <section id="home">
            <motion.div
                className="introcontent"
                style={{ scale: scaleValue }}
                animate={{ opacity: scrollY > 300 ? 0.5 : 1 }} 
                transition={{ duration: 0.5 }}
                
            >
                <motion.span className="hello">
                    Hello,
                </motion.span>
                <motion.span className="introtext">
                    I'm <span className="name">Kanishka</span>
                </motion.span>
                <motion.span className="profession">
                    Data Scientist / Software Developer.
                </motion.span>
                <motion.p className="introduction">
                    "From data to insights, from code to impact"
                </motion.p>
                <motion.button
                    className="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.open('Kanishka-sharma.pdf', '_blank')}
                >
                    Resume
                </motion.button>
            </motion.div>
            <motion.div
                className="contentback-wrapper"
                style={{ scale: scaleValue }} 
                transition={{ duration: 0.7 }}
            >
                <img src={bg} alt="background" className="contentback" />
            </motion.div>
        </section>
    );
};

export default Intro;
