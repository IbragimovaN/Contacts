import { ACTIONS_LIST } from "../actions/actions";
import { SetContactsAction } from "../actions/types";

const initialGroupssState = {
  groupsArr: [],
  currentGroup: {},
};

export const contactsReducer = (
  state = initialGroupssState,
  action: SetContactsAction
) => {
  switch (action.type) {
    case ACTIONS_LIST.SET_GROUPS_ACTION:
      return {
        ...state,
        groupsArr: [...action.payload],
      };
    case ACTIONS_LIST.SET_CURRENT_GROUP_ACTION:
      return {
        ...state,
        currentGroup: action.payload,
      };
    default:
      return state;
  }
};
