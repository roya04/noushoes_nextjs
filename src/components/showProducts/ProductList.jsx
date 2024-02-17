import React from 'react'
import Add from '../../images/add.png'

import data from '../../shoesAPI/data'

import ProductCard from './ProductCard';
export async function getStaticProps() {
    return {
        props: {
            data: data,
        },

        revalidate: 3600,
    };
}
const ProductList = ({ data }) => {
    if (!data) {

        return <div>No products available.</div>;
    }
    return (
        <>
        
            {
                data.map((item, index) => (
                    <ProductCard item={item} />
                ))
            }
        </>
    )
}

export default ProductList

