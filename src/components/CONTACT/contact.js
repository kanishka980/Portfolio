import React from 'react';
import './contact.css';
import github from "../../assets/git.png";
import linkedin from "../../assets/linkedin.jpg";
import gmail from "../../assets/gmail.avif";
import emailjs from 'emailjs-com';
import  { useRef } from 'react';


const Contact =()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wu1jma9', 'template_4hqyglp', form.current, 'MHnWOpDn-SS-ThrQo')
            .then(() => {
                console.log('!SUCCESS');
                alert("message sent sucessfully");
                
            }, (error) => {
                console.log( '!FAILED....',error.text);
                alert("message not sent");
               
            });
    };

    return (
        <section id="cont" >
        <section className="contact">
            <div className="contact-page">
                <h1 className="contact-title">Contact Me</h1>
                <span className="desc">
                    Please fill out the form below to discuss any work opportunties.
                </span>
                <form  className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" className="name" placeholder="Your Name" required></input>
                    <input type="email" name="user_email" className='email' placeholder='Your Email' required />
                    <textarea name="message" className ="msg" rows="5"placeholder="Your Message" required></textarea>
                    
                    <button className='btn' type='submit' value="send" >Submit</button>
                    <div className='links'>
                    <a href="https://github.com/kanishka980" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="gitHub" className="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/kanishka-sharma-b56a06237/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" className="linkedin" />
                        </a>
                        <a href="https://mail.google.com/mail/u/2/#inbox" target="_blank" rel="noopener noreferrer">
                            <img src={gmail} alt="gmail" className="gmail" />
                        </a>
                    
                    </div>

                </form>
            
            </div>
            

        </section>
        </section>

    );
}
export default Contact;