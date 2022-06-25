
import '../styles/Contact.css'
import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBTextArea
} from "mdb-react-ui-kit";




function Contact() {
    return (<div > 


        <MDBCard className="contactDiv">
            <h2>Contact</h2>
            <br></br>

           
            <div><a href="https://docs.google.com/document/d/1HABvFbo3acQqKrvqwtbbTZ3J3JnDRpTu7eMVwxnHCC0/edit?usp=sharing" target="_blank" rel="noreferrer" ><MDBBtn  className='mx-2' color='dark'  id="button">View Resume</MDBBtn></a></div>
            <br></br>
        
            <div>
                <div>
                    <a href="https://github.com/hljhtx" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/nolan/64/github.png" alt="github" /></a>
                    
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/hljhtx/" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/nolan/64/linkedin.png" alt="linkedin" /></a>
                
                </div>
            </div>

            <br></br>
 <MDBCardBody>
            <div className="contact">    
                <form action="https://submit-form.com/Sln4NLYO">
                <h5>Send An Email!</h5>
                    
                    <label for="name">From:</label>
                    <br></br>
                    <MDBInput type="text" id="name" name="name" label="Name" required="" />
                    <label for="email"></label>
                    <MDBInput type="email" id="email" name="email" label="Email" required="" />
                    <br></br>
                    <label for="message">Message</label>
                    <br></br>
                    <MDBTextArea
                        id="message"
                        name="message"
                        label="Message"
                        required=""
                    ></MDBTextArea>
                    <br></br>
                  
                    <MDBBtn className="sndBtn" color='success' type="submit">Send</MDBBtn>
                    
                    
                    <br></br>
                </form>
            </div>
            </MDBCardBody>

        </MDBCard>
        </div>

    )
}


export default Contact