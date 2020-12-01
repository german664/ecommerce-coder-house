import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../../Firebase'

const Banner = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const bannersCollection = db.collection('banners')
        bannersCollection.get().then((querySnapshot) => {
            if (querySnapshot.length === 0) {
                console.log('No hay datos')
            } else {
                setImages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            }
        })
    }, [])
    return (
        <Carousel pause="hover">
            {images.map(image => (
                <Carousel.Item key={image.id}>
                    <Link to={image.linkTo}>
                        <img
                            className="d-block w-100"
                            src={image.url}
                            alt={image.title}
                        />
                    </Link>
                </Carousel.Item>
            ))}



        </Carousel>
    )
}

export default Banner
