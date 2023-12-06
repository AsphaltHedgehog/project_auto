// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   isLoading: false,
//   error: false,
//   catalog: [],
// };

// const pending = (state) => { 
//   state.isLoading = true;
// }

// const errored = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
//   }

// const fulfilled = (state, action) => {
//   state.isLoading = false;
//   state.catalog = action.payload;
// }

// const catalogSlice = createSlice({
//   name: "catalog",
//   initialState,
//   extraReducers: builder =>
//     builder
//       .addCase(fetchCatalog.pending, state => {
//         pending()
//       })
//       .addCase(fetchCatalog.rejected, (state, action) => {
//         errored(state, action)
//       })
//       .addCase(fetchCatalog.fulfilled, (state, action) => {
//         fulfilled(state, action)
//       })  
// });