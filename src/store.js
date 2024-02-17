// rootReducer.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import searchReducer from './redux/slices/searchSlice';
const rootReducer = combineReducers({
  search: searchReducer,
 
});




const store = configureStore({
  reducer: rootReducer,
});

export default store;
