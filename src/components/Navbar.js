import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "bg-body-tertiary scrolled" : "bg-body-tertiary"}>
            <Container>
                <Navbar.Brand href="#home">Moiz Waseem</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link 
                        href="#home" 
                        className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('home')}>
                            Home
                        </Nav.Link>
                    <Nav.Link 
                        href="#skills" 
                        className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('skills')}>
                            Skills
                        </Nav.Link>
                    <Nav.Link 
                        href="#projects" 
                        className={activeLink == 'projects' ? 'active navbar-link' : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={""} alt="" /></a>
                        <a href="#"><img src={""} alt="" /></a>
                        <a href="#"><img src={""} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log("Click")}>
                        <span>Lets Connect</span>
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar;