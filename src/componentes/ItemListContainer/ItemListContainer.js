import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ItemList from './ItemList/ItemList';

const ItemListContainer = ({ title }) => {
    const [productList, setProductList] = useState([])

    const fetchPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1, price: 100000, title: "Apple Airpods Auriculares Bluetooth inalámbricos para iPhone con iOS 10", pictureUrl: "/images-promiseTest/airpods.jpg", stock: 5, description: "Los AirPods Pro fueron diseñados con Cancelación Activa de Ruido para brindarte un sonido inmersivo con el modo Transparencia para que puedas oír lo que sucede a tu alrededor y con un ajuste personalizado para que los lleves puestos todo el día con comodidad. Los AirPods Pro se conectan al iPhone o Apple Watch como por arte de magia igual que los AirPods. En cuanto los saques del estuche estarán listos para usarse."
                },

                { id: 2, price: 150000, title: "Echo Dot (3ra Gen) - Parlante inteligente con Alexa", pictureUrl: "/images-promiseTest/alexa.jpg", stock: 8, description: "Echo Dot es un parlante inteligente controlado por voz con Alexa. Pide música noticias información y mucho más. También puedes llamar a casi cualquier persona y controlar con tu voz los dispositivos Smart Home compatibles." },

                { id: 3, price: 200000, title: "Cámara fotográfica EOS Rebel T7 con juego de doble acercamiento", pictureUrl: "/images-promiseTest/camera.jpg", stock: 15, description: "Modelo ideal para poner en práctica tu talento en la captura y grabación de tus proyectos y grandes momentos. Esta versión destaca por su Sensor CMOS APS-C (22.3 x 14.9 mm) de 24.1 Megapíxeles su opción para filmar en formato Vídeo Full HD (1080p) y la capacidad de tomar hasta 3 fotos por segundo en modo ráfaga" },

                { id: 4, price: 90000, title: "Apple - iPhone 11 ", pictureUrl: "/images-promiseTest/phone.jpg", stock: 18, description: "Este producto seminuevo no está certificado por Apple, pero ha sido inspeccionado, probado y limpiado profesionalmente por proveedores calificados de Amazon." },

                { id: 5, price: 90000, title: "Apple - iPhone 11 ", pictureUrl: "/images-promiseTest/phone.jpg", stock: 18, description: "Este producto seminuevo no está certificado por Apple, pero ha sido inspeccionado, probado y limpiado profesionalmente por proveedores calificados de Amazon." },

                { id: 6, price: 90000, title: "Apple - iPhone 11 ", pictureUrl: "/images-promiseTest/phone.jpg", stock: 18, description: "Este producto seminuevo no está certificado por Apple, pero ha sido inspeccionado, probado y limpiado profesionalmente por proveedores calificados de Amazon." },

                { id: 7, price: 90000, title: "Apple - iPhone 11 ", pictureUrl: "/images-promiseTest/phone.jpg", stock: 18, description: "Este producto seminuevo no está certificado por Apple, pero ha sido inspeccionado, probado y limpiado profesionalmente por proveedores calificados de Amazon." },

                { id: 8, price: 90000, title: "Apple - iPhone 11 ", pictureUrl: "/images-promiseTest/phone.jpg", stock: 18, description: "Este producto seminuevo no está certificado por Apple, pero ha sido inspeccionado, probado y limpiado profesionalmente por proveedores calificados de Amazon." }
            ])
        }, 2000)
    })


    useEffect(() => {
        fetchPromise.then(result => setProductList(result))
    }, [])
    return <>
        <h3 className="text-center my-4">{title}</h3>

        <Container>
            <div className="row row-cols-1 row-cols-md-4 justify-content-center mt-2">
                {productList.length > 0 ?
                    <ItemList products={productList} /> : <div className="d-flex justify-content-center mt-5"> <span class="loader mt-5"></span></div>}
            </div>

        </Container>

    </>
}
export default ItemListContainer