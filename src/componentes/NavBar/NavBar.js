import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';


const NavBar = () => {
    return (<Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
            <div>
                <a href="#home" className="text-light brand m-0" >Tecno Store</a>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />


            <Navbar.Collapse id="basic-navbar-nav" className=" order-2 order-md-1 justify-content-start text-white">

                <Nav className=" ml-4">

                    <a href="#action/3.1">Notebooks</a>
                    <a href="#action/3.2">Smartphones</a>
                    <a href="#action/3.3">Videojuegos</a>

                </Nav>

            </Navbar.Collapse>
            <div className="order-1 order-md-2">
                <CartWidget />
            </div>
        </Container>
    </Navbar>)
}
export default NavBar