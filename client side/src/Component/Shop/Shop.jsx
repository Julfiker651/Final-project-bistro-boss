import React from 'react';
import Cover from './Cover/Cover';
import Tabb from './Tab/Tabb';
import { Helmet } from 'react-helmet-async';

const Shop = () => {
    return (
        <>
           <Helmet>
                <title>Bistro || shop</title>
           </Helmet>
           <Cover></Cover>
           <Tabb></Tabb>
        </>
    );
};

export default Shop;