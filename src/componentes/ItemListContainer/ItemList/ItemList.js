import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Item from './Item/Item'

const ItemList = ({ products }) => {
    return (

        products.map(product => {
            return <div className="col mt-4 mt-md-0" key={product.id} >
                <Item product={product} />
            </div>
        })

    )
}

export default ItemList
