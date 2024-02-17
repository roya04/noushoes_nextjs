import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Add from '../../images/add.png'
import styles from '@/components/showProducts/productCard.module.scss'


const ProductCard = ({ item }) => {
    const { name, price, discount, image } = item;
    const discountedPrice = discount ? price * (1 - discount / 100) : null;
  


    return (    
        <div className={styles.productCard}>
            <Link href={`/shop_detail/${item.id}`}>
                <div className={styles.productImg}>
                    <Image src={image} alt={name} />
                </div>
                <div className={styles.productInfo}>
                    <h3>{name}</h3>
                </div>
            </Link>
            <div className={`${styles.cardBottom} ${discountedPrice ? styles.hasDiscount : ''}`}>
                {discountedPrice ? (
                    <>
                        <span className={styles.discountedPrice}>${discountedPrice.toFixed(2)}</span>
                        <span className={styles.originalPrice}>${price.toFixed(2)}</span>
                    </>
                ) : (
                    <span>${price.toFixed(2)}</span>
                )}
                <span className={styles.add}  >
                    <Image style={{cursor:"pointer"}} src={Add} alt="Add to Cart" />
                </span>
            </div>
        </div>
    );
}

export default ProductCard;
