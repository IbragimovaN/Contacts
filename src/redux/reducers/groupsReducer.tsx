import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { ACTIONS_LIST } from "../actions/actions";
import { SetGroupsActione } from "../actions/types";

export interface InitialGroupsState {
  groupsArr: GroupContactsDto[] | [];
}

const initialGroupsState: InitialGroupsState = {
  groupsArr: [],
};

export const groupsReducer = (
  state = initialGroupsState,
  action: SetGroupsActione
): InitialGroupsState => {
  switch (action.type) {
    case ACTIONS_LIST.SET_GROUPS_ACTION:
      return {
        ...state,
        groupsArr: [...action.payload],
      };

    default:
      return state;
  }
};
