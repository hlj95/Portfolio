
import '../styles/Contact.css'


function Contact() {
    return (

        <div className="contactDiv">
            <h2>Contact</h2>
            <br></br>
            <div><a href="https://docs.google.com/document/d/1cWH1NRWQkBmAEdTQKzhgcT2ZLpvrkfDx_bnEniOS4Yk/edit?usp=sharing" target="_blank" rel="noreferrer" ><button id="button">View Resume</button></a></div>
            <br></br>
        
            <div>
                <div>
                    <a href="https://github.com/hlj95" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/ios/50/000000/github--v2.png" alt="github" /></a>
                    
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/heriberto-lopez-jr/" target="_blank" rel="noreferrer" ><img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="linkedin" /></a>
                
                </div>
            </div>

            <br></br>

            <div className="contact">    
                <form action="https://submit-form.com/Sln4NLYO">
                <h5>Send An Email!</h5>
                    
                    <label for="name">From:</label>
                    <br></br>
                    <input type="text" id="name" name="name" placeholder="Name" required="" />
                    <br></br>
                    <label for="email"></label>
                    <br></br>
                    <input type="email" id="email" name="email" placeholder="Email" required="" />
                    <br></br>
                    <br></br>
                    <label for="message">Message</label>
                    <br></br>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        required=""
                    ></textarea>
                    <br></br>
                    <button id="button" type="submit">Send</button>
                    <br></br>
                </form>
            </div>

        </div>
    )
}


export default Contact