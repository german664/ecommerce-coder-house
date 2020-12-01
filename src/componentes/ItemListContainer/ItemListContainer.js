import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';
import OrderSearch from './OrderSearch';
import ErrorMessage from '../Message/ErrorMessage';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getFirestore } from '../../Firebase';


const ItemListContainer = ({ title, category }) => {

    const [productList, setProductList] = useState([])


    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('items')
        if (category) {

            const categoryItems = itemCollection.where('category', '==', category)

            setLoading(true)
            setErrorMessage("")

            categoryItems.get().then((querySnapshot) => {
                if (querySnapshot.length === 0) {
                    console.log('Error')
                } else {
                    if (querySnapshot.docs.length === 0) {
                        setErrorMessage('No hay productos en esta categoría')
                    } else {
                        setProductList(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                    }
                }
            }).catch(error => console.log(error)).finally(() => setLoading(false))

        } else {
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
        }
    }, [category])

    return <>


        <Container>

            {!category && <OrderSearch />}
            {category && <Link to="/">
                <span className="btn btn-outline-primary mt-4 px-5"> <i className="fas fa-arrow-left"></i> Volver </span>
            </Link>}
            <h3 className="text-center my-4">{category ? category.toUpperCase() : title.toUpperCase()}</h3>

            <div className="row row-cols-1 row-cols-md-4 justify-content-center mt-2">
                {loading ? <Loader /> : errorMessage !== "" ? <div className="d-flex justify-content-center mt-5"><ErrorMessage>{errorMessage}</ErrorMessage> </div> :
                    <ItemList products={productList} />
                }
            </div>

        </Container>

    </>
}
export default ItemListContainer