import React, { useState, useContext } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../store/Context/CartContext'
import ItemCount from '../../ItemCount/ItemCount'
import './itemDetail.css'

const ItemDetail = ({ item, setItemDetail }) => {
    const priceStyle = {
        "font-size": "2.2rem"
    }


    const [qty, setQty] = useState(0)
    const { addItem } = useCartContext()

    const onAdd = (item, quantityToAdd, stock) => {
        setQty(quantityToAdd)
        setItemDetail(prevState => {
            return {
                ...prevState,
                stock: (stock - quantityToAdd)
            }
        })
        addItem(item, quantityToAdd)
    }

    const formatNumber = (number) => {
        return Intl.NumberFormat().format(parseInt(number))
    }


    return (
        <div className="mb-4">

            {!!item &&
                <Row className="justify-content-center">
                    <Col md={5} className="">
                        <Image src={item.pictureUrl} alt={item.title} fluid className="rounded img-detail border shadow-sm" />
                    </Col>
                    <Col md={6} className="">
                        <div className="card border-0 h-100">
                            <div className="card-body d-flex flex-column py-0 pl-0">
                                <div className="my-1 mt-md-0">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h4 className="text-danger" style={priceStyle}>{"$" + formatNumber(item.price)}</h4>
                                    {item.stock < 10 && <h6 className="ml-4 border border-danger  p-1 shadow-sm rounded-lg">{item.stock} en stock</h6>}
                                </div>

                                <div className="text-justify mt-2">
                                    <p>{item.description}</p>
                                </div>

                                <div className="d-flex justify-content-center mt-auto">
                                    <ItemCount stock={item.stock} initialValue={1} onAdd={onAdd} item={item} />
                                </div>
                                {qty > 0 &&
                                    <div className="d-flex justify-content-center mt-2">
                                        <button className="btn btn-primary" ><Link to="/cart" className="text-white">Terminar Compra</Link></button>
                                    </div>
                                }

                            </div>
                        </div>
                    </Col>

                </Row>

            }

        </div>
    )
}

export default ItemDetail
