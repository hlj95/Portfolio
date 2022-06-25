
import '../styles/AboutMe.css'
import ProfilePicture from '../images/profile.jpg'
import Contact from './Contact'
import {
    MDBCard,
    MDBCardBody
} from "mdb-react-ui-kit";

function AboutMe() {
    return (
        <div className="about_me">
            
            
                <MDBCard className="aboutMe">
                
                    <h2>Hello, I'm Eri!</h2>
                    <h5>Heriberto Lopez Jr.</h5>
                    <MDBCardBody>   
                    <p> I'm a Full-Stack Developer based in Houston, Texas staying up-to-date with current and future technology.
                        Formerly a manufacturing consultant for the Oil & Gas sector for several companies in the Greater Houston area.
                    </p>

                    </MDBCardBody>

                    <div className="pic">
                        <img src={ProfilePicture} alt="profilepicture" />
                    </div>
                    </MDBCard>
                <br></br>
                <Contact />


        </div>

    )
}

export default AboutMe