import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "src/constants/baseUrl";
import { ContactDto } from "src/types/dto/ContactDto";
export const contactsApiSlice = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getContacts: builder.query<ContactDto[], void>({
      query: () => "/contacts",
    }),
    getCurrentContact: builder.query<ContactDto, ContactDto["id"]>({
      query: (id) => `/contacts/${id}`,
    }),
  }),
});
