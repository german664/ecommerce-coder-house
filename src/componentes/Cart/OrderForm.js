import React, { useState } from 'react'
import { ListGroup, Button, Form, Alert } from 'react-bootstrap'
import firebase from 'firebase/app'
import { getFirestore } from '../../Firebase'
import { useCartContext } from '../../store/Context/CartContext'
import { useHistory } from 'react-router-dom'

const OrderForm = ({ cart }) => {

    const history = useHistory()
    const { clearCart } = useCartContext()
    const [error, setError] = useState(false)

    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    })
    const [emailCheck, setEmailCheck] = useState("")

    const handleInput = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const db = getFirestore()
        const ordersCollection = db.collection('orders')

        setError(false)

        if (!buyer.name || !buyer.phone || !buyer.email || !buyer.address) {
            setError('Completa los datos')
        }
        else if (buyer.email !== emailCheck) {
            setError('El email no coincide')

        } else {
            const newOrder = {
                buyer,
                items: cart.map(item => ({ id: item.id, title: item.title, price: item.price, quantity: item.qty, image: item.pictureUrl })),
                date: firebase.firestore.FieldValue.serverTimestamp(),
                total: cart.totalPrice,
                delivered: false
            }
            try {
                const doc = await ordersCollection.add(newOrder)

                const itemsInCart = await db.collection("items")
                    .where(firebase.firestore.FieldPath.documentId(),
                        'in', cart.map(c => c.id))
                    .get();

                itemsInCart.docs.forEach(doc => {
                    const item = cart.find(item => doc.id === item.id)
                    doc.ref.update({ stock: doc.data().stock - item.qty })
                })

                history.push(`/order/${doc.id}/success`)
                clearCart()

            } catch (error) {
                console.log(error)
            }
        }

    }

    const formatNumber = (numero) => {
        return new Intl.NumberFormat().format(numero)
    }

    return (
        <ListGroup >
            <Form onSubmit={submitHandler}>
                <ListGroup.Item>
                    <h4 className="text-secondary">({cart.reduce((acc, item) => acc + item.qty, 0)}) PRODUCTOS</h4>
                    {error && (<Alert variant="danger" className="mt-3">{error}</Alert>)}
                    <Form.Group controlId="name">
                        <Form.Label>
                            Nombre
                                    </Form.Label>
                        <Form.Control type="text" name="name" placeholder="Ingresa tu nombre" value={buyer.name} onChange={handleInput} />

                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>
                            Número Telefónico
                                    </Form.Label>
                        <Form.Control type="number" name="phone" placeholder="Ingresa tu número de teléfono" value={buyer.phone} onChange={handleInput} />

                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>
                            Email
                                    </Form.Label>
                        <Form.Control type="email" name="email" placeholder="Ingresa tu correo electrónico" value={buyer.email} onChange={handleInput} />

                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>
                            Confirma tu Email
                                    </Form.Label>
                        <Form.Control type="email" name="emailCheck" placeholder="Ingresa nuevamente tu correo electrónico" value={buyer.emailCheck} onChange={(e) => setEmailCheck(e.target.value)} />

                    </Form.Group>
                    <Form.Group controlId="dirección">
                        <Form.Label>
                            Dirección
                                    </Form.Label>
                        <Form.Control type="text" name="address" placeholder="Ingresa tu dirección" value={buyer.address} onChange={handleInput} />

                    </Form.Group>
                    <h4 className="text-center"> Total: $ {formatNumber(cart.totalPrice)}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button type="submit" style={{ "background": "#18222c" }} className="btn-block py-3" disabled={cart.length === 0}>Comprar</Button>
                </ListGroup.Item>
            </Form>
        </ListGroup>
    )
}

export default OrderForm
