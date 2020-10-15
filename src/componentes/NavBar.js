import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (<Navbar className="navbar" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#home" className="text-light" >Tecno Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start text-white">

            <Nav className="mr-5">
                <NavDropdown title="Productos" id="basic-nav-dropdown" className="py-0">
                    <NavDropdown.Item href="#action/3.1">Notebooks</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Smartphones</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Videojuegos</NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </Navbar.Collapse>
    </Navbar>)
}
export default NavBar