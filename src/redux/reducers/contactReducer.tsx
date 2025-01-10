import { ACTIONS_LIST } from "../actions/actions";
import { SetCurrentContactAction } from "../actions/types";
import { ContactDto } from "src/types/dto/ContactDto";

export interface InitialContactState {
  currentContact: ContactDto | {};
}

const initialContactState: InitialContactState = {
  currentContact: {},
};

export const contactReducer = (
  state = initialContactState,
  action: SetCurrentContactAction
): InitialContactState => {
  switch (action.type) {
    case ACTIONS_LIST.SET_CURRENT_CONTACT_ACTION:
      return {
        ...state,
        currentContact: action.payload,
      };

    default:
      return state;
  }
};
