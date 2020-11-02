import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({ item, initialValue, onAdd }) => {
    const priceStyle = {
        "color": "#E74C3C",
        "font-size": "2.5rem"
    }
    const gastoCLP = (numero) => {
        return new Intl.NumberFormat().format(numero)
    }
    return (
        <div>

            <Row>
                <Col md={6} className="">
                    <Image src={item.pictureUrl} alt={item.title} fluid className="rounded" />
                </Col>
                <Col md={6} className="">
                    <div className="card border-0 h-100">
                        <div className="card-body d-flex flex-column py-0">
                            <div>
                                <h3>{item.title}</h3>
                            </div>
                            <div>
                                <h4 className="mt-2 mb-3" style={priceStyle}>{!!item.price && "$" + gastoCLP(item.price)}</h4>
                            </div>
                            <div>
                                <p>{item.description}</p>
                            </div>
                            <div className="d-flex justify-content-center mt-auto">
                                <ItemCount stock={item.stock} initialValue={initialValue} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>



        </div>
    )
}

export default ItemDetail
