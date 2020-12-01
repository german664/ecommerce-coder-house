import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';
import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../Message/ErrorMessage';
import Loader from '../Loader/Loader';
import { getFirestore } from '../../Firebase';


const SearchListContainer = () => {

    const [productList, setProductList] = useState([])
    const { search } = useParams()
    const [loading, setLoading] = useState(true)
    const equalizeSearch = (searched) => {
        return searched.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()
    }

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('items')
        setLoading(true)
        itemCollection.where('stock', '>', 0).get().then((querySnapshot) => {
            if (querySnapshot.length === 0) {
                console.log('Error')
            } else {
                if (querySnapshot.docs.length === 0) {
                    console.log('No hay productos')
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

    }, [search])

    return <>
        <Container>
            <Link to="/">
                <span className="btn btn-outline-primary mt-4  px-5"> <i className="fas fa-arrow-left"></i> Volver </span>
            </Link>
        </Container>
        {loading ? <Loader /> :
            productList.length === 0 ? <div className="d-flex justify-content-center mt-5"><ErrorMessage>{"No se ha encontrado ningún producto"}</ErrorMessage> </div>
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