import React from 'react'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = ({ item, initialValue, onAdd }) => {
    return (
        <ItemDetail item={item} initialValue={initialValue} onAdd={onAdd} />
    )
}

export default ItemDetailContainer
