import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import formReducer from './reducers/formSlice';
import advertSlice from './reducers/advertSlice';
import { routerReducer } from 'react-router-redux';

export default configureStore({
  reducer: {
    routing: routerReducer,
    auth: authReducer,
    form: formReducer,
    advert: advertSlice,
  },
  //@ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
