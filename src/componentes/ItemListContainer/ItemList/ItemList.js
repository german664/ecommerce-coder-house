import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Item from './Item/Item'

const ItemList = ({ products }) => {
    return (

        products.map(product => {
            return <div className="col mb-5" key={product.id} >
                <Item product={product} />
            </div>
        })

    )
}

export default ItemList
