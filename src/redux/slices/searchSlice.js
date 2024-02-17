
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
  filteredProducts: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    filterProducts: (state, action) => {
      const { products, searchText } = action.payload;
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      state.filteredProducts = filteredProducts;
    },
  },
});

export const { setSearchText, filterProducts } = searchSlice.actions;

export default searchSlice.reducer;
