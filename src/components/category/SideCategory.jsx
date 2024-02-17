import React, { useState } from 'react';
import styles from '@/components/category/sidecategory.module.scss';

const SideCategory = ({ products, applyFilters }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const brands = [...new Set(products.map((product) => product.brand))];
  const colors = [...new Set(products.map((product) => product.color))];
  const sizes = [...new Set(products.flatMap((product) => product.sizes))];

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const priceRanges = [
    { label: 'Less than $50', value: '0-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $150', value: '100-150' },
  ];

  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const applyFiltersHandler = () => {
    const filters = {
      brands: selectedBrands,
      price: selectedPrice,
      colors: selectedColors,
      sizes: selectedSizes,
    };
    applyFilters(filters);
  };

  const resetFiltersHandler = () => {
    setSelectedBrands([]);
    setSelectedPrice('');
    setSelectedColors([]);
    setSelectedSizes([]);
    applyFilters({});
  };

  return (
    <div className={styles.categories}>
      {/* Brand Filter */}
      <div className={styles.brands}>
        <h3>Brands</h3>
        <ul>
          {brands.map((brand) => (
            <li key={brand}>
              <label>
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className={styles['custom-checkbox']}
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className={styles.price}>
        <h3>Price</h3>
        <ul>
          {priceRanges.map(({ label, value }) => (
            <li key={value}>
              <label>
                <input
                  type="checkbox"
                  name="price"
                  value={value}
                  checked={selectedPrice === value}
                  onChange={() => handlePriceChange(value)}
                  className={styles['custom-checkbox']}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Color Filter */}
      <div className={styles.color}>
        <h3>Colors</h3>
        <ul>
          {colors.map((color) => (
            <li key={color}>
              <label>
                <input
                  type="checkbox"
                  value={color}
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                  className={styles['custom-checkbox']}
                />
                {color}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Filter */}
      <div className={styles.size}>
        <h3>Sizes</h3>
        <ul>
          {sizes.map((size) => (
            <li key={size}>
              <label>
                <input
                  type="checkbox"
                  value={size}
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                  className={styles['custom-checkbox']}
                />
                {size}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Apply and Reset Buttons */}
      <div className={styles.buttons}>
        <button onClick={applyFiltersHandler}>Apply Filters</button>
        <button onClick={resetFiltersHandler}>Reset Filters</button>
      </div>
    </div>
  );
};

export default SideCategory;
