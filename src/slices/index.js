import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  latLng: {
    latitude: 0,
    lngitude: 0,
  },
  places: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLatLng(state, action) {
      state.latLng = action.payload;
    },
    setPlaces(state, action) {
      state.places = action.payload;
    },
  },

});

export const { actions, reducer } = appSlice;
export const { setLatLng, setPlaces } = actions;

export default reducer;
