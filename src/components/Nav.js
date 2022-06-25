// import { NavLink } from "react-router-dom";
import '../styles/Nav.css'
import Nav from 'react-bootstrap/Nav'
import  Navbar  from 'react-bootstrap/Navbar';
import  logo from '../images/apple-touch-icon.png';



function Navigation() {

    return (
        <div className="navbar" >
            <Navbar variant="dark">
                    <div>&nbsp;<img src={logo} className='logo'/></div>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
            </Navbar>

        </div>
    )
}



export default Navigation

