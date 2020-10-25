import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ title }) => {
    const [stock, setStock] = useState(15)
    const [cartCount, setCartCount] = useState(0)
    const handleAdd = (value) => {
        setStock(stock - value)
        setCartCount(cartCount + value)
    }

    return <>
        <h3 className="text-center mt-2">{title}</h3>
        <p className="text-center">Stock: {stock}</p>
        <p className="text-center">Carrito: {cartCount}</p>
        <div className="d-flex justify-content-center">
            <ItemCount stock={stock} initialValue={1} onAdd={handleAdd} />
        </div>
    </>
}
export default ItemListContainer