import { ContactDto } from "src/types/dto/ContactDto";
import { ACTIONS_LIST } from "../actions/actions";
import { SetContactsAction } from "../actions/types";

export interface InitialContactsState {
  contactsArr: ContactDto[] | [];
}
const initialContactsState: InitialContactsState = {
  contactsArr: [],
};

export const contactsReducer = (
  state = initialContactsState,
  action: SetContactsAction
): InitialContactsState => {
  switch (action.type) {
    case ACTIONS_LIST.SET_CONTACTS_ACTION:
      return {
        ...state,
        contactsArr: [...action.payload],
      };

    default:
      return state;
  }
};
