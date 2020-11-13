import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import './Navbar.css';


const NavBar = () => {
    return (<Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
            <div>
                <Link to="/" className="text-light brand m-0" >Tecno Store</Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />


            <Navbar.Collapse id="basic-navbar-nav" className=" order-2 order-md-1 justify-content-start text-white">

                <Nav className=" ml-4">

                    <NavLink activeClassName="text-success" to="/category/notebooks">Notebooks</NavLink>
                    <NavLink activeClassName="text-success" to="/category/smartphones">Smartphones</NavLink>
                    <NavLink activeClassName="text-success" to="/category/videojuegos">Videojuegos</NavLink>

                </Nav>

            </Navbar.Collapse>
            <div className={"order-1 order-md-2"}>
                <Link to="/cart" className="m-0 cart">
                    <CartWidget />
                </Link>
            </div>
        </Container>
    </Navbar>)
}
export default NavBar