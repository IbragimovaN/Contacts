import { contactsApiSlice } from "./api";
export const contactsReducer = contactsApiSlice.reducer;
export const contactsReducerPath = contactsApiSlice.reducerPath;
export const contactsMiddleware = contactsApiSlice.middleware;

export const { useGetContactsQuery, useGetCurrentContactQuery } =
  contactsApiSlice;
