import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favoriteSlice";
import filterReducer from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    favorites: favoritesReducer,
  },
});
