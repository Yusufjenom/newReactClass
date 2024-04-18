import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../slice/counter';
import productsSlice from '../slice/fetchProducts';



const store = configureStore({
    reducer:{
      counter: counterSlice,
      products: productsSlice
    }
});


export default store;