import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ title }) => {
    const [productList, setProductList] = useState([])
    const [stock, setStock] = useState(15)
    const [cartCount, setCartCount] = useState(0)
    const handleAdd = (value) => {
        setStock(stock - value)
        setCartCount(cartCount + value)
    }
    const fetchPromise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve([{ id: 1, price: 100000, title: "Airpods", pictureUrl: "/images-promiseTest/airpods.jpg" }, { id: 2, price: 150000, title: "Alexa Speaker", pictureUrl: "/images-promiseTest/alexa.jpg" }, , { id: 3, price: 200000, title: "Camara Canon", pictureUrl: "/images-promiseTest/camera.jpg" }, { id: 4, price: 90000, title: "Iphone X", pictureUrl: "/images-promiseTest/phone.jpg" }]) }, 2000)
    })

    useEffect(() => {
        fetchPromise.then(result => setProductList(result))
    }, [])
    return <>
        <h3 className="text-center mt-2">{title}</h3>
        <p className="text-center mt-2">Stock total: {stock}</p>
        <p className="text-center mt-2">Carrito: {cartCount}</p>
        <Container>
            {productList.length > 0 ?
                <ItemList products={productList} stock={stock} initialValue={1} onAdd={handleAdd} /> : <div className="d-flex justify-content-center mt-5"> <span class="loader mt-5"></span></div>}
        </Container>

    </>
}
export default ItemListContainer