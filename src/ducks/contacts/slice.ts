import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";

interface FavoritesState {
  favoritesContacts: FavoriteContactsDto;
}

const initialState: FavoritesState = {
  favoritesContacts: JSON.parse(
    localStorage.getItem("favoritesContacts") || "[]"
  ),
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favoritesContacts.push(action.payload);
      localStorage.setItem(
        "favoritesContacts",
        JSON.stringify(state.favoritesContacts)
      );
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoritesContacts = state.favoritesContacts.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem(
        "favoritesContacts",
        JSON.stringify(state.favoritesContacts)
      );
    },
  },
});
