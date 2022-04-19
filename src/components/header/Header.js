import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className="container-fluid bg-light p-0">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="favicon.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand className='fs-3 fw-normal' href="#home">Splash Photography <small className='fs-6 fw-normal'>by Mushfiq</small></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/services">Services</Link>
                            <Link className='nav-link' to="/checkout">Checkout</Link>
                            <Link className='nav-link' to="/blogs">Blogs</Link>
                            <Link className='nav-link' to="/about">About Me</Link>
                            {
                                user ?
                                    <Link onClick={handleSignOut} className='nav-link' to="/login">Sign out</Link>
                                    :
                                    <Link className='nav-link' to="/login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;