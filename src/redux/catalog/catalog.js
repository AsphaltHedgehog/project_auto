import { createSlice } from "@reduxjs/toolkit";

// operations
import { fetchCatalog } from "./operation";


const initialState = {
  isLoading: false,
  error: false,
  catalog: [],
  brands: [],
};

const pending = (state) => { 
  state.isLoading = true;
}

const errored = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}


const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCatalog.pending, state => {
        pending(state)
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        errored(state, action)
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.meta.arg.page === 1) {
          if (action.meta.arg.limit === 32) {
            state.brands = action.payload;
          } else if (action.meta.arg.limit === 12) {
            state.catalog = action.payload;
          } else {
            state.catalog = action.payload;
          }
        } else {
          console.log('Сработала типа пагинация');
          state.catalog.push(...action.payload);
        }
      })
});

export const catalogReducer = catalogSlice.reducer;