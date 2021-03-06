import { createSlice } from '@reduxjs/toolkit';
import cookie from 'js-cookie';
import authTypes from '../types/auth.types';

const initialState = {
  user:
    cookie.get('userCN') !== undefined ? JSON.parse(cookie.get('userCN')!) : {},
  isAuthenticated: cookie.get('accessTokenCN') ? true : false,
  accessToken: cookie.get('accessTokenCN') ? cookie.get('accessTokenCN') : '',
  refreshToken: cookie.get('refreshTokenCN')
    ? cookie.get('refreshTokenCN')
    : '',
  register_state:
    cookie.get('register_stateCN') !== undefined
      ? JSON.parse(cookie.get('register_stateCN')!)
      : {},
} as authTypes;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      cookie.set('userCN', JSON.stringify(action.payload.user));
      cookie.set('isAuthenticatedCN', JSON.stringify(true));
      cookie.set('accessTokenCN', action.payload.accessToken);
      cookie.set('refreshTokenCN', action.payload.refreshToken);
    },
    LOGOUT: (state) => {
      state.user = null;
      state.accessToken = '';
      state.refreshToken = '';
      state.isAuthenticated = false;
      cookie.set('userCN', JSON.stringify(null));
      cookie.set('isAuthenticatedCN', JSON.stringify(false));
      cookie.set('accessTokenCN', '');
      cookie.set('refreshTokenCN', '');
    },
    UPDATE: (state, action) => {
      state.user = action.payload;
      cookie.set('userCN', JSON.stringify(action.payload));
    },
    REGISTERSTATE: (state, action) => {
      state.register_state = action.payload;
      cookie.set('register_stateCN', JSON.stringify(action.payload));
    },
  },
});

export const { LOGIN, LOGOUT, UPDATE } = authSlice.actions;
export const selectIsAuthenticated = (state: any) => state.isAuthenticated;
export const selectUser = (state: any) => state.user;
export default authSlice.reducer;
