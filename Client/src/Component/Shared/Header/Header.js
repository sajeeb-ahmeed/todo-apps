import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdAddIcCall, MdOutgoingMail } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';

import { signOut } from 'firebase/auth';
import auth from '../../../firebase/firebase.init';



const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container className='text-center py-4'>
                    <Navbar.Brand as={Link} to="/">

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                            <a className='me-lg-5 mb-4 mb-lg-0 color-2' href="tel:+8801748402018">
                                <MdAddIcCall size="24" className="nav-linker  me-2" />

                            </a>
                            <a href=" ">
                                <span className='color-2' onClick={() => window.location = 'mailto:sajeeb.web@gmail.com'}> <MdOutgoingMail size="24" className="nav-linker " />
                                </span>
                            </a>


                        </Nav>
                        <Nav className='mx-auto text-center d-block'>

                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link as={Link} to="/todo">Add Todo</Nav.Link>
                            {
                                user ?
                                    <>
                                        <Nav.Link onClick={handleSignOut}> Log Out</Nav.Link>
                                        <Nav.Link onClick={handleSignOut} as={Link} to="/login">{user?.displayName}</Nav.Link>

                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;