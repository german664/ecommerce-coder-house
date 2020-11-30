import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { useCartContext } from '../../store/Context/CartContext'
import ErrorMessage from '../Message/ErrorMessage'

const ItemDetailContainer = () => {
    const history = useHistory()
    const { itemCollection } = useCartContext()
    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState()
    const [error, setError] = useState(false)
    const itemCollectionDetail = itemCollection.doc(id)
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoading(true)
        itemCollectionDetail.get().then((doc) => {
            if (!doc.exists) {
                console.log('No hay datos')
                setError(true)
                setErrorMessage("Ups! Parece que el producto que buscas ya no existe")
            } else {
                setItemDetail({ id: doc.id, ...doc.data() })
            }
        }).catch(error => {
            setErrorMessage("Ups! Parece que hubo un error. Intenta recargar la página")
        }).finally(() => {
            setLoading(false)
        })

    }, [id])



    return (

        loading ?
            <div className="d-flex justify-content-center mt-5"> < span className="loader mt-5" /> </div >
            : error ?

                <div className="d-flex flex-column align-items-center mt-5">
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <h5>¡Sigue viendo nuestros productos!</h5>
                    <Link to="/">
                        <span className="btn btn-outline-primary mt-2 px-5"> <i class="fas fa-arrow-left"></i> Volver </span>
                    </Link>
                </div>

                :
                <>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={11}>
                                <span className="btn btn-secondary my-4" onClick={() => history.goBack()}>Atrás</span>
                            </Col>
                        </Row>
                        <ItemDetail item={itemDetail} setItemDetail={setItemDetail} />
                    </Container>
                </>


    )
}

export default ItemDetailContainer
