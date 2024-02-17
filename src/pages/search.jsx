// SearchPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import products from '../shoesAPI/data';
import styles from '@/styles/searchpg.module.scss'
import Basket from '../images/basket.png'

import ProductCard from '@/components/showProducts/ProductCard';
import Image from 'next/image';
const SearchPage = () => {
  const searchText = useSelector((state) => state.search.searchText);


  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className={styles.products}>
    <div className={styles.container}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <ProductCard key={product.id} item={product} />)
      ) : (
        <div className={styles.noMatchingItem}>
          <Image src={Basket} alt="Basket" width={100} height={100} />
          <p>No matching item.</p>
        </div>
      )}
    </div>
  </section>
  );
};

export default SearchPage;
