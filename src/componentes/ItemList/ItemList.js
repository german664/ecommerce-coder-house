import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = ({ products, stock, initialValue, onAdd }) => {
    return (
        <Row>
            { products.map(product => {
                return <Col key={product.id} sm={9} md={6} lg={4} xl={3}>
                    <Item product={product} stock={stock} initialValue={initialValue} onAdd={onAdd} />
                </Col>
            })}
        </Row>
    )
}

export default ItemList
