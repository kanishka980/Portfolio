
import bg from '../../assets/about.webp';
import './intro.css';
import hire from '../../assets/resume.png'


const Intro=()=>{
   
    
    
    
    return (
        <section id="home">
            <div className="introcontent">
                <span className="hello">Hello,</span>
                <span className="introtext"> I'm <span className="name">Kanishka</span></span> <br></br> <span className="profession">Data Scientist / Software Developer.</span>
                <p className="introduction">As a B.Tech student specializing in AI and Data Science, I am committed to creating innovative AI solutions for real-world challenges. I aim to continually enhance my expertise in machine learning and collaborate on pioneering projects that push the boundaries of technology.</p>
                <button className="button" onClick={() => window.open('kanishka_resume.pdf', '_blank')}> <img src={hire} className="hire" alt="Resume Button" /></button>

            </div>
            <div>
                <img src={bg} alt="background" className="contentback" />
            </div>
        </section>

    
    )
}
export default Intro;