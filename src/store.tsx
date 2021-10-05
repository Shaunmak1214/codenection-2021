import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import formReducer from './reducers/formSlice';
import { routerReducer } from 'react-router-redux';

export default configureStore({
  reducer: {
    routing: routerReducer,
    auth: authReducer,
    form: formReducer,
  },
  //@ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
