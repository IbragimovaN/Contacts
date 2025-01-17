import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  contactsMiddleware,
  contactsReducer,
  contactsReducerPath,
  favoritesReducer,
} from "./contacts";
import { groupMiddleware, groupReducer, groupReducerPath } from "./groups";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  [contactsReducerPath]: contactsReducer,
  [groupReducerPath]: groupReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([contactsMiddleware, groupMiddleware]),
});

export type RootState = ReturnType<typeof rootReducer>;
