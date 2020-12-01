import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../Firebase';
import CartWidget from './CartWidget/CartWidget';
import SearchBar from './SearchBar/SearchBar';


const NavigationBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const categoriesCollection = db.collection('categories')
        categoriesCollection.get().then((querySnapshot) => {
            if (querySnapshot.length === 0) {
                console.log('No hay datos')
            } else {
                setCategories(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }
        })
    }, [])

    return (<Navbar className="p-3" variant="dark" expand="lg" fixed="top" style={{ "color": "#ffffff", "background": "#18222c" }}>
        <Container>
            <div>
                <Link to="/" className="text-light brand m-0 mr-md-5" style={{ "fontSize": "1.5em" }}>Tecno Store</Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />


            <Navbar.Collapse id="basic-navbar-nav" className=" order-2 order-md-1 justify-content-start text-white">

                <NavDropdown title="Categorías" id="basic-nav-dropdown" variant="light" style={{ "color": "#fff" }}>
                    {categories.map(category => {
                        return (
                            <NavDropdown.Item as={Link} to={`/category/${category.key}`} style={{ "color": "#000000" }} key={category.id}>
                                {category.nombre}
                            </NavDropdown.Item>
                        )
                    })}
                </NavDropdown>

                <Nav className="ml-md-5">
                    <SearchBar />
                </Nav>


            </Navbar.Collapse>
            <div className={"order-1 order-md-2"}>
                <Link to="/cart" className="m-0 cart">
                    <CartWidget />
                </Link>
            </div>
        </Container>
    </Navbar >)
}
export default NavigationBar