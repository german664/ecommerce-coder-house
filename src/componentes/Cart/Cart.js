import React from 'react'
import { Col, Row, Image, ListGroup, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../store/Context/CartContext'

const Cart = () => {
    const { cart, removeItem, clearCart } = useCartContext()
    cart.totalItems = cart.reduce((acc, item) => acc + (item.qty * item.price), 0)
    const gastoCLP = (numero) => {
        return new Intl.NumberFormat().format(numero)
    }
    return (
        <Container>
            <h2 className="text-center my-4">Tu carro de compras</h2>
            <Row>

                <Col md={9}>
                    <ListGroup >
                        {cart.length > 0 &&
                            <>
                                {cart.map(cartItem => {
                                    return (
                                        <ListGroup.Item className="py-md-2 pl-md-2 pr-md-3 ">
                                            <Row className="d-flex align-items-center justify-content-center text-center">
                                                <Col lg={2}><Image src={cartItem.pictureUrl} fluid rounded /></Col>
                                                <Col lg={5} ><Link to={`/item/${cartItem.id}`} className="text-body">{cartItem.title}</Link></Col>
                                                <Col lg={2} > Cantidad: <br /> {cartItem.qty}</Col>
                                                <Col lg={2} className="text-center">Total: <br /> $ {cartItem.qty * cartItem.price}</Col>
                                                <Col lg={1}> <span className="btn border border-danger text-danger">
                                                    <i className="fas fa-trash" onClick={() => {
                                                        removeItem(cartItem.id)
                                                    }} />
                                                </span>  </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )
                                })}
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

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="p-0">
                            <h5 className="text-secondary">Total</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3> $ {gastoCLP(cart.totalItems)}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item className="p-0 mt-3">
                            <Button type="button" className="btn-block py-3" disabled={cart.length === 0}>Comprar</Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

            </Row>
        </Container>
    )
}

export default Cart
