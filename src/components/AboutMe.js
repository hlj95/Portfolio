
import '../styles/AboutMe.css'
import ProfilePicture from '../images/profile.jpg'
import Contact from './Contact'


function AboutMe() {
    return (
        <div className="about_me">
            <Contact />

            <div className="aboutMe">
                <h2>About Me</h2>
                <p> I'm a software developer learning daily to stay up-to-date with current and future technology. 
                    Formerly a manufacturing consultant for the Oil & Gas sector for several companies in the Greater Houston area. 
                    I chose to manuever over to the tech industry to pursue a career as a 
                    software engineer through Digital Crafts' Immersive Full-Stack Coding Bootcamp and self-teaching as well.</p>
            
            
            
             <div className="pic">
                <img src={ProfilePicture} alt="profilepicture" />  
                
            </div>
            </div>
            
            <br></br>


           
            
            

        </div>

    )
}

export default AboutMe