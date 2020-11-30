import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';
import { useCartContext } from '../../store/Context/CartContext';
import OrderSearch from './OrderSearch';


const ItemListContainer = ({ title }) => {
    const [productList, setProductList] = useState([])
    const { itemCollection } = useCartContext()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        itemCollection.where('stock', "!=", 0).get().then((querySnapshot) => {
            if (querySnapshot.length === 0) {
                console.log('No hay datos')
                setLoading(false)
            } else {
                setProductList(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                setLoading(false)
            }
        }).catch(error => console.log(error))

    }, [])

    return <>


        <Container>

            <OrderSearch />
            <h3 className="text-center my-4">{title}</h3>

            <div className="row row-cols-1 row-cols-md-4 justify-content-center mt-2">
                {loading ? <div className="d-flex justify-content-center mt-5"> <span class="loader mt-5"></span></div> :
                    <ItemList products={productList} />
                }
            </div>

        </Container>

    </>
}
export default ItemListContainer