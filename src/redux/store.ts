import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  // contacts: productsReducer,
  // groups: orderReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof rootReducer>;
