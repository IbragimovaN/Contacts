import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  setContactsAction,
  setCurrentContactAction,
  setCurrentGroupAction,
  setGroupsAction,
} from "./actions";
import { BASE_URL } from "src/constants/baseUrl";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ActionsTypes } from "./types";

export const getContactsActionAsync =
  (): ThunkAction<Promise<ActionsTypes>, RootState, unknown, ActionsTypes> =>
  (dispatch) => {
    return fetch(`${BASE_URL}/contacts`)
      .then((res) => res.json())
      .then((data) => dispatch(setContactsAction(data)));
  };

export const getGroupsActionAsync =
  (): ThunkAction<Promise<ActionsTypes>, RootState, unknown, ActionsTypes> =>
  (dispatch) => {
    return fetch(`${BASE_URL}/groups`)
      .then((res) => res.json())
      .then((data) => dispatch(setGroupsAction(data)));
  };

export const getCurrentContactActionAsync =
  (
    id: ContactDto["id"]
  ): ThunkAction<Promise<ActionsTypes>, RootState, unknown, ActionsTypes> =>
  (dispatch) => {
    return fetch(`${BASE_URL}/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(setCurrentContactAction(data)));
  };
export const getCurrentGroupActionAsync =
  (
    id: GroupContactsDto["id"]
  ): ThunkAction<Promise<ActionsTypes>, RootState, unknown, ActionsTypes> =>
  (dispatch) => {
    return fetch(`${BASE_URL}/groups/${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(setCurrentGroupAction(data)));
  };
