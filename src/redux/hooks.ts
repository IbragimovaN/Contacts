import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionsTypes } from "./actions/types";
import { RootState } from "./store";

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, ActionsTypes>
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
