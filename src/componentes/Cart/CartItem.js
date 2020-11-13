import React from 'react'
import { Col, Row, Image, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../store/Context/CartContext'

const CartItem = ({ pictureUrl, id, title, qty, price, stock }) => {

    const { removeItem, changeQty } = useCartContext()

    const changeQtyHandler = (e) => {
        changeQty(id, Number(e.target.value))
    }

    const styleButtons = {
        "cursor": "pointer",
        "background": "#d0d0d0",
        "border": "none",
        "minWidth": "1.7em",
    }

    return (
        <ListGroup.Item className="py-md-2 pl-md-2 pr-md-3 ">
            <Row className="d-flex align-items-center justify-content-center text-center">
                <Col lg={2}><Image src={pictureUrl} fluid rounded />
                </Col>

                <Col lg={5} ><Link to={`/item/${id}`} className="text-secondary">{title}</Link>
                </Col>

                <Col lg={2} className="d-flex  flex-column align-items-center"> Cantidad: <br />
                    <div className="d-flex mt-1">
                        <span className=" buttons d-flex justify-content-center align-items-center rounded-left" style={styleButtons} onClick={(e) => {
                            if (qty > 1) {
                                changeQty(id, qty - 1)
                            }
                        }} >-</span>

                        <span type="number" className="px-3 bg-white text-center border-top border-bottom pt-0" >{qty}</span>

                        <span className="buttons rounded-right d-flex justify-content-center align-items-center" style={styleButtons} onClick={() => {
                            if (qty < stock) {
                                changeQty(id, qty + 1)
                            }
                        }}>+</span>
                    </div>
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
