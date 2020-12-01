import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../../Rating/Rating'

const Item = ({ product }) => {
    const formatNumber = (number) => {
        return Intl.NumberFormat().format(parseInt(number))
    }
    return (
        <div className="card rounded h-100  shadow-sm p-0">
            <div className="card-body d-flex flex-column p-0">
                <div >
                    {product.stock < 10 &&
                        <div className="position-absolute bg-danger px-2 py-1 rounded" style={{ "right": "0" }}> <span className="text-white">¡Últimas unidades!</span>
                        </div>
                    }

                    <Link to={`/item/${product.id}`} >
                        <img src={product.pictureUrl} alt={product.title} className="card-img-top" /></Link>
                </div>
                <div className="px-3">
                    <Link to={`/item/${product.id}`}> <h5 className="my-2 text-body">{product.title}</h5></Link>
                </div>
                <div className="px-3">
                    <Rating value={product.rating} reviews={product.reviews} />
                </div>
                <div className="mt-auto px-3 mb-2">
                    <p className="mb-0 mt-auto text-right text-primary" style={{ "fontSize": "1.5em" }}><strong>${formatNumber(product.price)}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Item
