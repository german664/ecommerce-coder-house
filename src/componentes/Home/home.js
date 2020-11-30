import React from 'react';
import Banner from './Banner/Banner';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Home = ({ greeting }) => {

    return (
        <>
            <Banner />
            <ItemListContainer title="Catálogo" />
        </>
    )
}
export default Home