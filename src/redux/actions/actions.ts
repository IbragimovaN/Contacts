import { ContactDto } from "../../types/dto/ContactDto";
import { GroupContactsDto } from "../../types/dto/GroupContactsDto";
import { ActionsTypes } from "./types";

export const ACTIONS_LIST = {
  SET_CONTACTS_ACTION: "SET_CONTACTS_ACTION",
  SET_GROUPS_ACTION: "SET_GROUPS_ACTION",
  SET_CURRENT_CONTACT_ACTION: "SET_CURRENT_CONTACT_ACTION",
  SET_CURRENT_GROUP_ACTION: "SET_CURRENT_GROUP_ACTION",
};

export const setContactsAction = (data: ContactDto[]): ActionsTypes => {
  return {
    type: ACTIONS_LIST.SET_CONTACTS_ACTION,
    payload: data,
  };
};
export const setGroupsAction = (data: GroupContactsDto[]): ActionsTypes => {
  return {
    type: ACTIONS_LIST.SET_GROUPS_ACTION,
    payload: data,
  };
};
export const setCurrentContactAction = (data: ContactDto): ActionsTypes => {
  return {
    type: ACTIONS_LIST.SET_CURRENT_CONTACT_ACTION,
    payload: data,
  };
};
export const setCurrentGroupAction = (data: GroupContactsDto): ActionsTypes => {
  return {
    type: ACTIONS_LIST.SET_CURRENT_GROUP_ACTION,
    payload: data,
  };
};
