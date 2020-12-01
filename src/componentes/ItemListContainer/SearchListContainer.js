import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';
import { useCartContext } from '../../store/Context/CartContext';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../Message/ErrorMessage';
import Loader from '../Loader/Loader';


const SearchListContainer = () => {

    const [productList, setProductList] = useState([])
    const { itemCollection } = useCartContext()
    const { search } = useParams()
    const [loading, setLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const equalizeSearch = (searched) => {
        return searched.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()
    }

    useEffect(() => {

        setLoading(true)
        setErrorMessage("")
        itemCollection.where('stock', '>', 0).get().then((querySnapshot) => {
            if (querySnapshot.length === 0) {
                console.log('Error')
            } else {
                if (querySnapshot.docs.length === 0) {
                    setErrorMessage('No hay productos en esta categoría')
                } else {
                    setProductList(querySnapshot.docs.filter(doc => equalizeSearch(doc.data().title).includes(equalizeSearch(search))
                    ).map(product => {
                        return { id: product.id, ...product.data() }
                    })
                    )
                }
            }
        }).catch(error => console.log(error)).finally(() => {
            setLoading(false)
        })
        console.log(search)

    }, [search, itemCollection])

    return <>
        {loading ? <Loader /> :
            errorMessage !== "" ? <div className="d-flex justify-content-center mt-5"><ErrorMessage>{errorMessage}</ErrorMessage> </div>
                :
                <>
                    <h3 className="text-center my-4" >{"Resultado de tu búsqueda".toUpperCase()}</h3>
                    <Container>
                        <div className="row row-cols-1 row-cols-md-4 justify-content-center mt-2">

                            <ItemList products={productList} />
                        </div>

                    </Container>
                </>
        }
    </>
}
export default SearchListContainer