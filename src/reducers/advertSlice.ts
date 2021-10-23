import { createSlice } from '@reduxjs/toolkit';
import cookie from 'js-cookie';
import adTypes from '../types/advert.types';

let initialState: adTypes[] = [];
let advertsArr = JSON.parse(cookie.get('adverts') || '[]');

if (advertsArr.length > 0) {
  advertsArr.forEach((advert: adTypes) => {
    initialState.push({
      id: advert.id || '',
      count: advert.count || 0,
      latestPopupDateTime: advert.latestPopupDateTime || '',
      neverShowPopup: advert.neverShowPopup || false,
    });
  });
}

export const advertSlice = createSlice({
  name: 'advert',
  initialState,
  reducers: {
    ADD: (state, action) => {
      // @ts-ignore
      state = [...initialState, action.payload.advert];
      cookie.set(
        'adverts',
        // @ts-ignore
        JSON.stringify([initialState, action.payload.advert]),
      );
    },
    // REMOVE: (state) => {
    //   state.user = null;
    //   state.accessToken = '';
    //   state.refreshToken = '';
    //   state.isAuthenticated = false;
    //   cookie.set('userCN', JSON.stringify(null));
    // },
    UPDATEAD: (state, action) => {
      let target = state.find((x) => x.id === action.payload.advert.id);
      if (target) {
        target.count = action.payload.advert.count;
        target.latestPopupDateTime = action.payload.advert.latestPopupDateTime;
        target.neverShowPopup = action.payload.advert.neverShowPopup;
        cookie.set(
          'adverts',
          // @ts-ignore
          JSON.stringify(state),
        );
      }
    },
    // REGISTERSTATE: (state, action) => {
    //   state.register_state = action.payload;
    //   cookie.set('register_stateCN', JSON.stringify(action.payload));
    // },
  },
});

export const { ADD, UPDATEAD } = advertSlice.actions;
export default advertSlice.reducer;
