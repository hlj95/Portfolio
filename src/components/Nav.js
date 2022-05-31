// import { NavLink } from "react-router-dom";
import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Navigation() {

    return (
        <div className="navbar">
            {/* <NavLink to="/"><div className="homeLink">Home</div></NavLink>
                <NavLink to="/projects"><div className="projectsLink">Projects</div></NavLink>
                <NavLink to="/skills"><div className="skillsLink">Skills</div></NavLink>
                <NavLink to="/interests"><div className="interestsLink">Interests</div></NavLink> */}
            <Navbar className="links">
                    <div className="logo"><h2>Heriberto Lopez Jr.</h2></div>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Work</Nav.Link>
                        <Nav.Link href="/skills">Experience</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    )
}



export default Navigation
