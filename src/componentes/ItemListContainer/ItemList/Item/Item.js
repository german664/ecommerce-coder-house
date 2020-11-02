import React from 'react'

const Item = ({ product }) => {
    return (
        <div className="card p-3 rounded h-100 shadow-sm">
            <div className="card-body d-flex flex-column p-0">
                <div >
                    <a href={`#/product/${product.name}`}><img src={product.pictureUrl} className="card-img-top" /></a>
                </div>
                <div className="">
                    <h5 className="my-3">{product.title}</h5>
                </div>
                <div className="mt-auto">
                    <p className="mb-0 mt-auto text-right text-primary" style={{ "fontSize": "1.5em" }}><strong>${product.price}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Item
