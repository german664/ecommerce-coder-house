import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';
import { useCartContext } from '../../store/Context/CartContext';


const ItemListContainer = ({ title }) => {
    const [productList, setProductList] = useState([])
    const { itemCollection } = useCartContext()


    useEffect(() => {

        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.length === 0) {
                console.log('No hay datos')
            } else {
                setProductList(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }
        })
    }, [])

    return <>
        <h3 className="text-center my-4">{title}</h3>
        <Container>

            <div className="row row-cols-1 row-cols-md-4 justify-content-center mt-2">
                {productList.length > 0 ?
                    <ItemList products={productList} /> : <div className="d-flex justify-content-center mt-5"> <span class="loader mt-5"></span></div>}
            </div>

        </Container>

    </>
}
export default ItemListContainer