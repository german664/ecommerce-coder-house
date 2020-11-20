import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { getFirestore } from '../../Firebase';
import CartWidget from './CartWidget/CartWidget';
import './Navbar.css';


const NavBar = () => {
    const db = getFirestore()
    const categoriesCollection = db.collection('categories')
    const [categories, setCategories] = useState([])

    useEffect(() => {
        categoriesCollection.get().then((querySnapshot) => {
            if (querySnapshot.length === 0) {
                console.log('No hay datos')
            } else {
                setCategories(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }
        })
    }, [])

    return (<Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
            <div>
                <Link to="/" className="text-light brand m-0" >Tecno Store</Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />


            <Navbar.Collapse id="basic-navbar-nav" className=" order-2 order-md-1 justify-content-start text-white">



                <Nav className=" ml-4">
                    {categories.map(category => {
                        return (<NavLink activeClassName="text-success" to={`/category/${category.key}`} >{category.nombre}</NavLink>)
                    })}
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