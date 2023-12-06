// import { configureStore } from "@reduxjs/toolkit";

// import storage from "redux-persist/lib/storage";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const catalogPersistConfig = {
//   key: "catalog",
//   storage,
//   whitelist: ["catalog"]
// };

// export const store = configureStore({
//   reduser: {
//     catalog: persistReducer(catalogPersistConfig, )
//   }
// }, middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ); 


// export const persistor = persistStore(store);