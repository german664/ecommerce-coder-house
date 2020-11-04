import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <div className="card rounded h-100  shadow-sm p-0">
            <div className="card-body d-flex flex-column p-0">
                <div >
                    <Link to={`/item/${product.id}`}><img src={product.pictureUrl} className="card-img-top" /></Link>
                </div>
                <div className="px-3">
                    <h5 className="my-3">{product.title}</h5>
                </div>
                <div className="mt-auto px-3 mb-2">
                    <p className="mb-0 mt-auto text-right text-primary" style={{ "fontSize": "1.5em" }}><strong>${product.price}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Item
