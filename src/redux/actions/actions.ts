import { ContactDto } from "../../types/dto/ContactDto";
import { GroupContactsDto } from "../../types/dto/GroupContactsDto";
import {
  AddFavouritesContactAction,
  SetContactsAction,
  SetCurrentContactAction,
  SetCurrentGroupAction,
  SetGroupsActione,
} from "./types";

export const ACTIONS_LIST = {
  SET_CONTACTS_ACTION: "SET_CONTACTS_ACTION",
  SET_GROUPS_ACTION: "SET_GROUPS_ACTION",
  SET_CURRENT_CONTACT_ACTION: "SET_CURRENT_CONTACT_ACTION",
  SET_CURRENT_GROUP_ACTION: "SET_CURRENT_GROUP_ACTION",
  ADD_FAVOURITES_CONTACTS_IDS: "ADD_FAVOURITES_CONTACTS_IDS",
};

export const setContactsAction = (data: ContactDto[]): SetContactsAction => {
  return {
    type: ACTIONS_LIST.SET_CONTACTS_ACTION,
    payload: data,
  };
};
export const setGroupsAction = (data: GroupContactsDto[]): SetGroupsActione => {
  return {
    type: ACTIONS_LIST.SET_GROUPS_ACTION,
    payload: data,
  };
};
export const setCurrentContactAction = (
  data: ContactDto
): SetCurrentContactAction => {
  return {
    type: ACTIONS_LIST.SET_CURRENT_CONTACT_ACTION,
    payload: data,
  };
};
export const setCurrentGroupAction = (
  data: GroupContactsDto
): SetCurrentGroupAction => {
  return {
    type: ACTIONS_LIST.SET_CURRENT_GROUP_ACTION,
    payload: data,
  };
};
export const addFavouritesContactAction = (
  id: GroupContactsDto["id"]
): AddFavouritesContactAction => {
  return {
    type: ACTIONS_LIST.SET_CURRENT_GROUP_ACTION,
    payload: id,
  };
};
