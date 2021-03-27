import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formReducer';

export default configureStore({
  reducer: {
    data: formReducer,
  },
});
