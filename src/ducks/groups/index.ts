import { groupsApiSlice } from "./api";

export const groupReducerPath = groupsApiSlice.reducerPath;
export const groupReducer = groupsApiSlice.reducer;
export const groupMiddleware = groupsApiSlice.middleware;

export const { useGetGroupsQuery, useGetCurrentGroupQuery } = groupsApiSlice;
