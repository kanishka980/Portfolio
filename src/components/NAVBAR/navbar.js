import React from "react";
import "./navbar.css";
import logo from '../../assets/portlogo.avif';
import contactlogo from '../../assets/contact.webp';


const Navbar=()=>{
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="menu">
               <a href="#home">Home</a>
               <a href="#about">About</a>
               <a href="#work">Experience</a>
               <a href="#skills">Skills</a>
               <a href="#projects">Projects</a>

            </div>
            <a href="#cont" >
            <button className="contact-button">
                <img src={contactlogo} alt="contact" className="contacts"></img></button>
            </a>
            
        </nav>
    )
}
export default Navbar;