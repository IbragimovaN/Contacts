import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ACTIONS_LIST } from "./actions";

export interface SetContactsAction {
  type: typeof ACTIONS_LIST.SET_CONTACTS_ACTION;
  payload: ContactDto[];
}

export interface SetGroupsActione {
  type: typeof ACTIONS_LIST.SET_GROUPS_ACTION;
  payload: GroupContactsDto[];
}
export interface SetCurrentContactAction {
  type: typeof ACTIONS_LIST.SET_CURRENT_CONTACT_ACTION;
  payload: ContactDto;
}

export interface SetCurrentGroupAction {
  type: typeof ACTIONS_LIST.SET_CURRENT_GROUP_ACTION;
  payload: GroupContactsDto;
}

export type ActionsTypes =
  | SetContactsAction
  | SetGroupsActione
  | SetCurrentContactAction
  | SetCurrentGroupAction;
