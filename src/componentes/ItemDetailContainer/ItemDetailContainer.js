import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const items = [
        {
            id: 1, price: 100000, title: "Apple Airpods Auriculares Bluetooth inalámbricos para iPhone con iOS 10", pictureUrl: "/images-promiseTest/airpods.jpg", stock: 5, description: "Los AirPods Pro fueron diseñados con Cancelación Activa de Ruido para brindarte un sonido inmersivo con el modo Transparencia para que puedas oír lo que sucede a tu alrededor y con un ajuste personalizado para que los lleves puestos todo el día con comodidad. Los AirPods Pro se conectan al iPhone o Apple Watch como por arte de magia igual que los AirPods. En cuanto los saques del estuche estarán listos para usarse."
        },

        { id: 2, price: 150000, title: "Echo Dot (3ra Gen) - Parlante inteligente con Alexa", pictureUrl: "/images-promiseTest/alexa.jpg", stock: 8, description: "Echo Dot es un parlante inteligente controlado por voz con Alexa. Pide música noticias información y mucho más. También puedes llamar a casi cualquier persona y controlar con tu voz los dispositivos Smart Home compatibles." },

        { id: 3, price: 200000, title: "Cámara fotográfica EOS Rebel T7 con juego de doble acercamiento", pictureUrl: "/images-promiseTest/camera.jpg", stock: 15, description: "Kit fotográfico Canon compuesto por la cámara EOS Rebel T7 con lente 18-55mm + Lente EF75-300mm para conseguir la versatilidad y el enfoque adecuado en cada espacio. Modelo ideal para poner en práctica tu talento en la captura y grabación de tus proyectos y grandes momentos. Esta versión destaca por su Sensor CMOS APS-C (22.3 x 14.9 mm) de 24.1 Megapíxeles su opción para filmar en formato Vídeo Full HD (1080p) y la capacidad de tomar hasta 3 fotos por segundo en modo ráfaga" },

        { id: 4, price: 90000, title: "Apple - iPhone 11 ", pictureUrl: "/images-promiseTest/phone.jpg", stock: 18, description: "Este producto seminuevo no está certificado por Apple, pero ha sido inspeccionado, probado y limpiado profesionalmente por proveedores calificados de Amazon." }
    ]

    const handleAdd = (value, stock) => {
        setItemDetail(prevState => {
            return {
                ...prevState,
                stock: (stock - value)
            }
        })

    }

    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState()

    const getItemDetail = (id) => {
        const item = new Promise((resolve, reject) => {
            setTimeout(() => { resolve(items.find(item => item.id === parseInt(id))) }, 2000)
        })
        return item
    }

    useEffect(() => {
        getItemDetail(id).then(result => setItemDetail(result))
    }, [])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={10}>
                    <Link to="/"><span className="btn btn-secondary my-4">Atrás</span></Link>
                </Col>
            </Row>
            <ItemDetail item={itemDetail} initialValue={1} onAdd={handleAdd} />
        </Container>
    )
}

export default ItemDetailContainer
