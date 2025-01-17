import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "src/constants/baseUrl";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
export const groupsApiSlice = createApi({
  reducerPath: "grouptApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGroups: builder.query<GroupContactsDto[], void>({
      query: () => "/groups",
    }),
    getCurrentGroup: builder.query<GroupContactsDto, GroupContactsDto["id"]>({
      query: (id) => `/groups/${id}`,
    }),
  }),
});
