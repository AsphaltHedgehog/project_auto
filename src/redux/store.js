// base
import { configureStore } from "@reduxjs/toolkit";

// persist 
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// reducers
import { catalogReducer } from "./catalog/catalog";
import { favoriteReducer } from "./favorite/favorite";

// const catalogPersistConfig = {
//   key: "favorite",
//   storage,
//   whitelist: ["favorite"]
// };

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favorite"]
};

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer)
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);