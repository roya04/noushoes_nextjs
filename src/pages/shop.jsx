// pages/shop.js
import React, { useRef, useState } from 'react';
import SideCategory from '../components/category/SideCategory';
import shoeProducts from '../shoesAPI/data';
import ProductList from '../components/showProducts/ProductList';
import styles from '@/styles/shop.module.scss';
import Link from 'next/link';
import Banner1 from '../images/banner-1.webp'
import Banner2 from '../images/banner-2.jpg'
import Basket from '../images/basket.png'
import Image from 'next/image';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(shoeProducts);

  // Implement the function to update the product list based on the selected filters
  const applyFilters = (filters) => {
    let filteredList = shoeProducts;


    if (filters.brands && filters.brands.length > 0) {
      filteredList = filteredList.filter((product) => filters.brands.includes(product.brand));
    }


    if (filters.price) {
      const [minPrice, maxPrice] = filters.price.split('-');
      filteredList = filteredList.filter((product) => product.price >= parseFloat(minPrice) && product.price <= parseFloat(maxPrice));
    }


    if (filters.colors && filters.colors.length > 0) {
      filteredList = filteredList.filter((product) => filters.colors.includes(product.color));
    }

    if (filters.sizes && filters.sizes.length > 0) {
      filteredList = filteredList.filter((product) => filters.sizes.every((size) => product.sizes.includes(size)));
    }


    if (filters.gender) {
      filteredList = filteredList.filter((product) => product.type.toLowerCase() === filters.gender.toLowerCase());
    }

    setFilteredProducts(filteredList);
  };
  const [selectedGender, setSelectedGender] = useState('all');

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setSelectedGender(selectedGender);
    if (selectedGender === 'all') {
      applyFilters({}); // Show all products
    } else {
      applyFilters({ gender: selectedGender });
    }
  };
  const filterRef = useRef(null);


  const [showMe, setShowMe] = useState(true);

  function toggle(event) {
    if (window.innerWidth < 1200) {
      setShowMe(!showMe);
    }
  }
  return (
    <div className={styles.shopContainer}>
      <div className={styles.sideCategory} style={{ display: showMe ? 'none' : 'block' }} >
        <div className={styles.take}>
          <i onClick={toggle} class="ri-close-line"></i>  
         <SideCategory products={shoeProducts} applyFilters={applyFilters} selectedGender={selectedGender} /></div>

      </div>
      <div className={styles.sideCategory2}>

        <SideCategory products={shoeProducts} applyFilters={applyFilters} selectedGender={selectedGender} />
      </div>
      <div className={styles.empty}></div>

      <div className={styles.productList}>
        <section className={styles.sale}>
          <div className={styles.full}>
            <div className={styles.banner}>
              <Link href='/shop'> <Image src={Banner1} /></Link>
            </div>
            <div className={styles.banner}>
              <Link href='/shop'> <Image src={Banner2} /></Link>
            </div>

          </div>

        </section>

        <div className={styles.options}>
          <div onClick={toggle} className={styles.filter}><i class="ri-equalizer-fill"></i></div>
          <div className={styles.all}>
            <h2>Filter By Gender:</h2>
            <div className={styles.customSelect}>
              <select value={selectedGender} onChange={handleGenderChange}>
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div></div>


        </div>

        <ProductList data={filteredProducts} />
        {filteredProducts.length === 0 && (
          <div className={styles.noMatchingItem}>
            <Image src={Basket} />
            <p>No matching item.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Shop;
