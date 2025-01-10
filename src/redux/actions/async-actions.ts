import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  setContactsAction,
  setCurrentContactAction,
  setCurrentGroupAction,
  setGroupsAction,
} from "./actions";
import { BASE_URL } from "src/constants/env";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ActionsTypes } from "./types";

// export const ASYNC_ACTIONS_LIST = {
//   GET_CONTACTS_ACTION_ASYNC: "GET_CONTACTS_ACTION_ASYNC",
//   GET_CURRENT_CONTACT_ACTION_ASYNC: "GET_CURRENT_CONTACT_ACTION_ASYNC",
//   GET_GROUPS_ACTION_ASYNC: "GET_GROUPS_ACTION_ASYNC",
//   GET_CURRENT_GROUP_ACTION_ASYNC: "GET_CURRENT_GROUP_ACTION_ASYNC",
// };

export const getContactsActionAsync =
  (): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> =>
  (dispatch) => {
    return fetch(`${BASE_URL}/contacrs`)
      .then((res) => res.json())
      .then((data) => dispatch(setContactsAction(data)));
  };

export const getGroupsActionAsync =
  (): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> =>
  (dispatch) => {
    return fetch(`${BASE_URL}/groups`)
      .then((res) => res.json())
      .then((data) => dispatch(setGroupsAction(data)));
  };

export const getCurrentContactActionAsync =
  (
    id: ContactDto["id"]
  ): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> =>
  (dispatch) => {
    return fetch(`${BASE_URL}/groups${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(setCurrentContactAction(data)));
  };
export const getCurrentGroupActionAsync =
  (
    id: GroupContactsDto["id"]
  ): ThunkAction<Promise<void>, RootState, unknown, ActionsTypes> =>
  (dispatch) => {
    return fetch(`${BASE_URL}/groups${id}`)
      .then((res) => res.json())
      .then((data) => dispatch(setCurrentGroupAction(data)));
  };
