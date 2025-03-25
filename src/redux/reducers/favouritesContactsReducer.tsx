import { DATA_CONTACT } from "src/__data__";
import { ACTIONS_LIST } from "../actions/actions";
import { AddFavouritesContactAction } from "../actions/types";

export interface InitialFavouritesContactsState {
  favoriteContactsStateIds: string[];
}

const initialFavouritesContactState: InitialFavouritesContactsState = {
  favoriteContactsStateIds: [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ],
};

export const favouritesContactsReducer = (
  state = initialFavouritesContactState,
  action: AddFavouritesContactAction
): InitialFavouritesContactsState => {
  switch (action.type) {
    case ACTIONS_LIST.ADD_FAVOURITES_CONTACTS_IDS:
      return {
        ...state,
        favoriteContactsStateIds: [
          ...state.favoriteContactsStateIds,
          action.payload,
        ],
      };
    default:
      return state;
  }
};
