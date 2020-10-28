import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Home = ({ greeting }) => {

    return (
        <>
            <h1 className="mt-4 ml-4">{greeting}</h1>
            <ItemListContainer title="Productos" />
        </>
    )
}
export default Home