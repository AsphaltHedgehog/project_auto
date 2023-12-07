import { createSlice } from "@reduxjs/toolkit";

// operations
import { fetchCatalog } from "./operation";


const initialState = {
  isLoading: false,
  error: false,
  catalog: [],
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
        console.log(action);
        state.isLoading = false;
        state.catalog.push(...action.payload);
      })
});

export const catalogReducer = catalogSlice.reducer;