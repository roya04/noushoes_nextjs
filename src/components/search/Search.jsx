import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, filterProducts } from '../../redux/slices/searchSlice';
import styles from '@/components/search/search.module.scss';
import shoeProducts from '@/shoesAPI/data';
import { useRouter } from 'next/router'; // Import useHistory from React Router

const Search = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchText);
  const filteredProducts = useSelector((state) => state.search.filteredProducts);
  const router = useRouter(); // Create a history object from React Router

  const handleSearchInputChange = (event) => {
    dispatch(setSearchText(event.target.value));
  };

  const handleFilterProducts = (products) => {
    dispatch(filterProducts({ products, searchText }));

  };
 
  const handleIconClick = () => {
    handleFilterProducts(shoeProducts);
    router.push('/search'); // Use history.push for navigation
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleFilterProducts(shoeProducts);
      router.push('/search'); // Use history.push for navigation
    }
  };

  // Use `searchText` and `filteredProducts` in your component as needed.

  return (
    <div className={styles.search}>
      <input
        placeholder="Search"
        type="text"
        value={searchText}
        onChange={handleSearchInputChange}
        onKeyPress={handleKeyPress} // Call handleKeyPress when a key is pressed inside the input field
      />
      <i className="ri-search-2-line" onClick={handleIconClick}></i>
      {/* Render the filteredProducts here */}
    </div>
  );
};

export default Search;
