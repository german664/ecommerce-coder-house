import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

const OrderSearch = () => {
    const history = useHistory()
    const [orderId, setOrderID] = useState("")
    const handleInput = (e) => {
        setOrderID(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/order/${orderId}`)
    }
    return (
        <Row >
            <Container>
                <Col className="pb-3  mt-3 border-bottom">
                    <Row className="justify-content-around">
                        <Col md={4} className="border-right">
                            <div className="d-flex flex-column rounded p-2">
                                <Form onSubmit={handleSubmit} className="text-center">
                                    <h4 className="text-primary"><i class="fas fa-truck"></i></h4>
                                    <p >¡Envíos a domicilio!</p>
                                    <strong>Gratis a partir de $20.000</strong>
                                </Form>
                            </div>
                        </Col>
                        <Col md={4} className="border-right">
                            <div className="d-flex flex-column rounded p-2">
                                <Form onSubmit={handleSubmit}>
                                    <h4 className="text-center">Busca tu orden</h4>
                                    <input placeholder="Ingresa tu código de orden" className="form-control" onChange={handleInput}></input>
                                    <Button type="submit" style={{ "background": "#1A1A1A" }} className="w-100">Buscar</Button>
                                </Form>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex flex-column rounded p-2 text-center">
                                <Form onSubmit={handleSubmit}>
                                    <h4 className="text-primary"><i class="fas fa-phone-alt"></i></h4>
                                    <p >Atención telefónica</p>
                                    <strong>Escribe o llámanos al +56972994374</strong>
                                </Form>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Container >
        </Row >
    )
}

export default OrderSearch
