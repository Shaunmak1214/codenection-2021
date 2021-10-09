import { createSlice } from '@reduxjs/toolkit';
import cookie from 'js-cookie';

interface formInitialState {
  isPopulated: boolean;
  register_state: object | null;
}

const initialState: formInitialState = {
  isPopulated: cookie.get('formIsPopulatedCN') ? true : false,
  register_state:
    cookie.get('registerStateCN') !== undefined
      ? JSON.parse(cookie.get('registerStateCN')!)
      : {},
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    UPDATEREG: (state, action) => {
      state.isPopulated = true;
      state.register_state = action.payload;
      cookie.set('formIsPopulatedCN', JSON.stringify(true));
      cookie.set('registerStateCN', JSON.stringify(action.payload));
    },
    CLEARREG: (state) => {
      state.isPopulated = false;
      state.register_state = null;
      cookie.set('formIsPopulatedCN', JSON.stringify(false));
      cookie.set('registerStateCN', JSON.stringify(null));
    },
  },
});

export const { UPDATEREG, CLEARREG } = formSlice.actions;
export const selectRegisterState = (state: any) => state.form.register_state;
export const selectIsPopulated = (state: any) => state.form.isPopulated;
export default formSlice.reducer;
