import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};


const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      const id = action.payload;
      const index = state.favorite.findIndex((itemId) => itemId === id);

      if (index === -1) {
        state.favorite.push(id);
      } else {
        state.favorite = state.favorite.filter((itemId) => itemId !== id);
      }
    }
  }
});


export const { setFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;