import { contactsApiSlice } from "./api";
import { favoritesSlice } from "./slice";

export const contactsReducer = contactsApiSlice.reducer;
export const contactsReducerPath = contactsApiSlice.reducerPath;
export const contactsMiddleware = contactsApiSlice.middleware;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const { useGetContactsQuery, useGetCurrentContactQuery } =
  contactsApiSlice;
