import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
const NavigationBar = () => {

    const { User, logOut } = useContext(AuthContext);
// console.log(logOut())
const logOutRedirect=useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log("Log Out Sucessfull")
                logOutRedirect("/login")
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className=''>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/"> Home</Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>

                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link href="#deets">{User?.name}</Nav.Link>
                        {
                            User && User ? <Button variant="dark" size="sm" onClick={handleLogOut}>Log Out</Button> : <Link to="/login"><Button variant="dark" size="sm">Login</Button></Link>
                        }


                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </Container>
    );
};

export default NavigationBar;