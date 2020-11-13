import React from 'react'
import { Col, Row, Image, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../store/Context/CartContext'

const CartItem = ({ pictureUrl, id, title, qty, price }) => {

    const { removeItem } = useCartContext()

    return (
        <ListGroup.Item className="py-md-2 pl-md-2 pr-md-3 ">
            <Row className="d-flex align-items-center justify-content-center text-center">
                <Col lg={2}><Image src={pictureUrl} fluid rounded />
                </Col>

                <Col lg={5} ><Link to={`/item/${id}`} className="text-secondary">{title}</Link>
                </Col>

                <Col lg={2} > Cantidad: <br /> {qty}
                </Col>

                <Col lg={2} className="text-center">Total: <br /> $ {qty * price}
                </Col>

                <Col lg={1}> <span className="btn border border-danger text-danger" onClick={() => {
                    removeItem(id)
                }}>
                    <i className="fas fa-trash" />
                </span>
                </Col>
            </Row>

        </ListGroup.Item>
    )
}

export default CartItem
