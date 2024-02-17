import React from 'react';
import styles from './tabmenu.module.scss';

const TabMenu = ({ brands, activeBrand, onBrandChange }) => {
  return (
    <div className={styles['tab-menu']}>
      <div className={styles.buttons}>
         {brands.map((brand) => (
        <button
          key={brand}
          onClick={() => onBrandChange(brand)}
          className={brand === activeBrand ? styles.activeButton : ''}
        >
          {brand}
        </button>
      ))}</div>
     
    </div>
  );
};

export default TabMenu;
