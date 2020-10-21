import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (<Navbar className="navbar d-flex justify-content-between" variant="dark" expand="lg" fixed="top">
        <div>
            <a href="#home" className="text-light brand m-0" >Tecno Store</a>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />


        <Navbar.Collapse id="basic-navbar-nav" className=" order-2 order-md-1 justify-content-start text-white">

            <Nav className="mr-5">

                <a href="#action/3.1">Notebooks</a>
                <a href="#action/3.2">Smartphones</a>
                <a href="#action/3.3">Videojuegos</a>

            </Nav>

        </Navbar.Collapse>
        <div className="order-1 order-md-2">
            <CartWidget />
        </div>
    </Navbar>)
}
export default NavBar