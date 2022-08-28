import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myFavs: [],
};
const favoriteSlice = createSlice({
  name: "myFavs",
  initialState,
  reducers: {
    addMyFavsHandler: (state, action) => {
      state.myFavs = [...state.myFavs, action.payload];
    },
    removeMyFavsHandler: (state, action) => {
      state.myFavs = state.myFavs.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addMyFavsHandler, removeMyFavsHandler } = favoriteSlice.actions;

export default favoriteSlice.reducer;
