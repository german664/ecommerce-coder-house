import React from 'react'
import { Col, Row, ListGroup, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../store/Context/CartContext'
import CartItem from './CartItem'

const Cart = () => {
    const { cart, clearCart } = useCartContext()
    cart.totalItems = cart.reduce((acc, item) => acc + (item.qty * item.price), 0)
    const gastoCLP = (numero) => {
        return new Intl.NumberFormat().format(numero)
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={8}>
                    <ListGroup variant={cart.length > 0 && "flush"}>

                        {cart.length > 0 &&
                            <>
                                <h3 className="">RESUMEN DE LA COMPRA</h3>
                                {cart.map(cartItem => <CartItem {...cartItem}>
                                </CartItem>

                                )}
                                < div className="d-flex justify-content-center mt-3">
                                    <button button className="btn btn-danger" onClick={clearCart}>Vaciar carro de compras</button>
                                </div>
                            </>
                        }

                        {
                            cart.length === 0 &&

                            <ListGroup.Item className="p-4 text-center">

                                <i class="fas fa-shopping-cart fa-5x" style={{ "color": "#E8E9EB" }}></i>

                                <h6 className="my-4">El carro está vacío. ¡Sigue explorando nuestra tienda para encontrar un producto ideal para ti!</h6>

                                <Link to="/" className="text-white">  <Button type="button" variant="danger">¡Sigue comprando!</Button> </Link>

                            </ListGroup.Item>
                        }

                    </ListGroup>
                </Col>

                <Col md={4} className="mt-3 mt-md-0">
                    <ListGroup >
                        <ListGroup.Item className="">
                            <h4 className="text-secondary">TOTAL: ({cart.reduce((acc, item) => acc + item.qty, 0)}) PRODUCTOS</h4>
                            <h3> $ {gastoCLP(cart.totalItems)}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block py-3" disabled={cart.length === 0}>Comprar</Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

            </Row>
        </Container>
    )
}

export default Cart
