import { ACTIONS_LIST } from "../actions/actions";
import { SetContactsAction } from "../actions/types";

const initialContactsState = {
  contactsArr: [],
  currentContact: {},
};

export const contactsReducer = (
  state = initialContactsState,
  action: SetContactsAction
) => {
  switch (action.type) {
    case ACTIONS_LIST.SET_CONTACTS_ACTION:
      return {
        ...state,
        contactsArr: [...action.payload],
      };
    case ACTIONS_LIST.SET_CURRENT_CONTACT_ACTION:
      return {
        ...state,
        currentContact: action.payload,
      };
    default:
      return state;
  }
};
