
import '../styles/AboutMe.css'
import ProfilePicture from '../images/profile.jpg'



function AboutMe() {
    return (
        <div className="about_me">

            <div className="aboutMe">
                <h2>About Me</h2>
                <p> I'm an ambitious developer looking to contribute my time and skills. 
                    For the most part, my professional experience has been in manufacturing, 
                    in the Oil & Gas sector, operating various types of CNC Machines for several companies in the Greater Houston area. 
                    I chose to manuever over to the tech industry to pursue a career as a 
                    software engineer through Digital Crafts' Immersive Full-Stack Coding Bootcamp.</p>
            </div>
            
            <br></br>


            <div className="pic">
                <img src={ProfilePicture} alt="profilepicture" />  
                
            </div>
            
            

        </div>

    )
}

export default AboutMe