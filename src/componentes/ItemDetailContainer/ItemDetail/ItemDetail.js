import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
        <div className="mb-4">

            {!!item ?
                <Row className="justify-content-center">
                    <Col md={5} className="">
                        <Image src={item.pictureUrl} alt={item.title} fluid className="rounded" />
                    </Col>
                    <Col md={5} className="">
                        <div className="card border-0 h-100">
                            <div className="card-body d-flex flex-column py-0 pl-0">
                                <div className="mt-3 mt-md-0">
                                    <h3>{item.title}</h3>
                                </div>
                                <div>
                                    <h4 className="mt-2 mb-3" style={priceStyle}>{!!item.price && "$" + gastoCLP(item.price)}</h4>
                                </div>
                                <div className="text-justify">
                                    <p>{item.description}</p>
                                </div>
                                <div className="d-flex justify-content-center mt-auto">
                                    <ItemCount stock={item.stock} initialValue={initialValue} onAdd={onAdd} />
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                : <div className="d-flex justify-content-center mt-5"> <span class="loader mt-5"></span></div>
            }

        </div>
    )
}

export default ItemDetail
