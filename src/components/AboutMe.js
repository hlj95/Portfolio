
import '../styles/AboutMe.css'
import ProfilePicture from '../images/profile.jpg'
import Contact from './Contact'
import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardFooter,
    MDBBtn,
    MDBIcon,
    MDBTextArea
} from "mdb-react-ui-kit";

function AboutMe() {
    return (
        <div className="about_me">
            <Contact />
            
                <MDBCard className="aboutMe">
                
                    <h2>About Me</h2>
                    <MDBCardBody>   
                    <p> I'm a software developer learning daily to stay up-to-date with current and future technology.
                        Formerly a manufacturing consultant for the Oil & Gas sector for several companies in the Greater Houston area.
                        I chose to manuever over to the tech industry to pursue a career as a
                        software engineer through Digital Crafts' Immersive Full-Stack Coding Bootcamp and self-teaching as well.</p>

                    </MDBCardBody>

                    <div className="pic">
                        <img src={ProfilePicture} alt="profilepicture" />
                    </div>
                    </MDBCard>
                <br></br>
           


        </div>

    )
}

export default AboutMe