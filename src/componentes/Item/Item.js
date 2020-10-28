import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ product, stock, initialValue, onAdd }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <h5 className="mb-3">{product.title}</h5>
            <a href={`#/product/${product.name}`}><Card.Img src={product.pictureUrl} variant={"top"} /></a>
            <p className="mb-0 mt-2 text-right"><strong>${product.price}</strong></p>
            <ItemCount stock={stock} initialValue={initialValue} onAdd={onAdd} />

        </Card>
    )
}

export default Item
