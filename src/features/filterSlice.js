import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  dateInput: "",
  priceRange: {
    min: 0,
    max: 0,
  },
  propertyType: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    getLocation: (state, action) => {
      state.location = action.payload;
    },
    getDateInput: (state, action) => {
      state.dateInput = action.payload;
    },
    getPriceRange: (state, action) => {
      const [min, max] = action.payload.split("-");
      state.priceRange.min = min;
      state.priceRange.max = max;
    },
    getPropertyType: (state, action) => {
      state.propertyType = action.payload;
    },
  },
});

export const { getLocation, getDateInput, getPriceRange, getPropertyType } =
  filterSlice.actions;

export default filterSlice.reducer;
