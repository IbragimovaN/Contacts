import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ACTIONS_LIST } from "../actions/actions";
import { SetCurrentGroupAction } from "../actions/types";

export interface InitialGroupState {
  currentGroup: GroupContactsDto;
}
const initialGroupState: InitialGroupState = {
  currentGroup: {
    id: "",
    name: "",
    description: "",
    photo: "",
    contactIds: [],
  },
};

export const groupReducer = (
  state = initialGroupState,
  action: SetCurrentGroupAction
): InitialGroupState => {
  switch (action.type) {
    case ACTIONS_LIST.SET_CURRENT_GROUP_ACTION:
      return {
        ...state,
        currentGroup: action.payload,
      };
    default:
      return state;
  }
};
