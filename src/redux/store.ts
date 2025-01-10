import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import {
  contactsReducer,
  contactReducer,
  groupsReducer,
  groupReducer,
  favouritesContactsReducer,
} from "./reducers";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
  contact: contactReducer,
  group: groupReducer,
  favouriteContacts: favouritesContactsReducer,
});
console.log(typeof rootReducer);

// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
