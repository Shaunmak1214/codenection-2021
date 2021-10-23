import { createSlice } from '@reduxjs/toolkit';
import cookie from 'js-cookie';
import adTypes from '../types/advert.types';

let initialState: adTypes[] = [];
let advertsArr = JSON.parse(cookie.get('adverts') || '[]');

if (advertsArr.length > 0) {
  advertsArr.forEach((advert: adTypes) => {
    initialState.push({
      id: advert.id || '',
      // count: advert.count || 0,
      count: 0,
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
  },
});

export const { ADD, UPDATEAD } = advertSlice.actions;
export default advertSlice.reducer;
