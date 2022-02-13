import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  latLng: {
    latitude: 0,
    lngitude: 0,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLatLng(state, action) {
      state.latLng = action.payload;
    },
  },

});

export const { actions, reducer } = appSlice;
export const { setLatLng } = actions;

export default reducer;
