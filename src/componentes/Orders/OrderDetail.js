import React, { useState, useEffect } from 'react'
import { Col, Container, ListGroup, Row, Image, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getFirestore } from '../../Firebase'
import Loader from '../Loader/Loader'
import ErrorMessage from '../Message/ErrorMessage'

const OrderDetail = () => {
    const { orderId } = useParams()
    const [order, setOrder] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { success } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const ordersCollection = db.collection('orders')
        const orderDetail = ordersCollection.doc(orderId)
        setLoading(true)
        orderDetail.get().then((doc) => {
            if (!doc.exists) {
                setLoading(false)
                setError(true)
                setErrorMessage("Ups! Parece que la orden que buscas no existe")
            } else {
                setOrder({ id: doc.id, ...doc.data() })
            }
        }).catch(error => {
            setLoading(false)
            setError(true)
            setErrorMessage("Ups! Parece que hubo un error. Intenta recargar la página")
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [orderId])

    const formatNumber = (numero) => {
        return new Intl.NumberFormat().format(numero)
    }
    return (
        <Container className="mt-4">
            { loading ? <Loader /> :
                error ? <div>   <Link to="/"><span className="btn btn-secondary my-3">Atrás</span></Link><div className="d-flex justify-content-center "><ErrorMessage>{errorMessage}</ErrorMessage></div></div>
                    :
                    <Row className="justify-content-center">
                        {order &&
                            <>
                                {success &&
                                    <Col md={4}>
                                        <ListGroup variant="shadow">
                                            <ListGroup.Item className="px-2 ">
                                                <h3>Información de entrega</h3>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <p>
                                                    <strong> Nombre: </strong>
                                                    {order.buyer.name}
                                                </p>
                                                <p>
                                                    <strong> Teléfono: </strong>
                                                    {order.buyer.phone}
                                                </p>
                                                <p>
                                                    <strong> Dirección: </strong>
                                                    {order.buyer.address}
                                                </p>
                                                <p className="text-center mt-4">

                                                    {order.delivered ? <span className="border border-success shadow-sm p-2 rounded-lg">Entregado</span> : <span className="border border-danger shadow-sm p-2 rounded-lg">No entregado</span>}
                                                </p>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                }
                                <Col md={8}>

                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h2>Orden: {orderId}</h2>
                                            <h5>Creada el: {order.date.toDate().toLocaleDateString()}</h5>
                                        </ListGroup.Item>

                                        {order.items.map((item) => {
                                            return <ListGroup.Item key={item.product}>
                                                <Row className="align-items-center text-center">
                                                    <Col md={2}>
                                                        <Image src={item.image} alt={item.title} fluid rounded />
                                                    </Col>
                                                    <Col md={4} >
                                                        <strong>{item.title}</strong>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.quantity} x {item.price} = ${formatNumber(item.quantity * item.price)}
                                                    </Col>
                                                    <Col md={2}>
                                                        <Link to={`/item/${item.id}`}><Button className="btn btn-success"> Volver a comprar</Button> </Link> </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        })}
                                        <ListGroup.Item>
                                            <h3 className="text-center mt-3 ">TOTAL: ${formatNumber(order.total)}</h3>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </>
                        }
                    </Row>
            }
        </Container >
    )
}

export default OrderDetail
