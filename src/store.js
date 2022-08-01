import { configureStore } from '@reduxjs/toolkit'
import artistReducer from './reducers/artistReducer';

const store = configureStore({
    reducer: {
      artists: artistReducer
    },
  })

  export default store;
