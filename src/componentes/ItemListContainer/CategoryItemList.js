import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';
import { useCartContext } from '../../store/Context/CartContext';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../Message/ErrorMessage';


const CategoryItemList = () => {

    const [productList, setProductList] = useState([])
    const { itemCollection } = useCartContext()
    const { category } = useParams()
    const categoryItems = itemCollection.where('category', '==', category)
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {

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

    }, [category])


    return <>
        {loading ? <div className="d-flex justify-content-center mt-5"> <span class="loader mt-5"></span></div> :
            errorMessage !== "" ? <div className="d-flex justify-content-center mt-5"><ErrorMessage>{errorMessage}</ErrorMessage> </div>
                :
                <>
                    <h3 className="text-center my-4">{category.toUpperCase()}</h3>
                    <Container>
                        <div className="row row-cols-1 row-cols-md-4 justify-content-center mt-2">

                            <ItemList products={productList} />
                        </div>

                    </Container>
                </>
        }
    </>
}
export default CategoryItemList