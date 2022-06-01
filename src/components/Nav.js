// import { NavLink } from "react-router-dom";
import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import  Navbar  from 'react-bootstrap/Navbar';



function Navigation() {

    return (
        <div className="navbar">
            <Navbar>
                    <div className="logo">Heriberto Lopez Jr.</div>
                    <Nav>
                        <Nav.Link href="/">&nbsp;Home</Nav.Link>
                        <Nav.Link href="/projects">&nbsp;Work</Nav.Link>
                        <Nav.Link href="/skills">&nbsp;Experience</Nav.Link>
                        <Nav.Link href="/contact">&nbsp;Contact&nbsp;</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    )
}



export default Navigation
