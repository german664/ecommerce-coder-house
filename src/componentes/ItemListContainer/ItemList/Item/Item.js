import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../../store/Context/CartContext'

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
                        <img src={product.pictureUrl} className="card-img-top pt-1" /></Link>
                </div>
                <div className="px-3">
                    <Link to={`/item/${product.id}`}> <h5 className="my-3 text-body">{product.title}</h5></Link>
                </div>
                <div className="mt-auto px-3 mb-2">
                    <p className="mb-0 mt-auto text-right text-primary" style={{ "fontSize": "1.5em" }}><strong>${formatNumber(product.price)}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Item
