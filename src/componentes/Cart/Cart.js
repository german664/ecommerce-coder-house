import React from 'react'
import { Col, Row, ListGroup, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../store/Context/CartContext'
import CartItem from './CartItem'
import OrderForm from './OrderForm'

const Cart = () => {
    const { cart, clearCart } = useCartContext()

    return (
        <Container className="mt-4">
            <Row>
                <Col md={8}>
                    <ListGroup variant={cart.length > 0 && "flush"}>

                        {
                            cart.length === 0 ?

                                <ListGroup.Item className="p-4 text-center">

                                    <i className="fas fa-shopping-cart fa-5x" style={{ "color": "#E8E9EB" }}></i>

                                    <h6 className="my-4">El carro está vacío. ¡Sigue explorando nuestra tienda para encontrar un producto ideal para ti!</h6>

                                    <Link to="/" className="text-white">  <Button type="button" variant="danger">¡Sigue comprando!</Button> </Link>

                                </ListGroup.Item>

                                :

                                <>
                                    <h3>RESUMEN DE LA COMPRA</h3>
                                    {cart.map((cartItem, index) => <CartItem {...cartItem} key={index}>
                                    </CartItem>

                                    )}
                                    < div className="d-flex justify-content-center my-3">
                                        <button button className="btn btn-danger" onClick={clearCart}>Vaciar carro de compras</button>
                                    </div>
                                </>
                        }

                    </ListGroup>
                </Col>

                <Col md={4} className="mt-3 mt-md-0">

                    <OrderForm cart={cart} />

                </Col>

            </Row>
        </Container>
    )
}

export default Cart
