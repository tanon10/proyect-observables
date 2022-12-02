import { createSlice, current } from "@reduxjs/toolkit";
import { localStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/util";

const initialStatePerson: Person[] = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: getLocalStorage(localStorageTypes.FAVORITE)
    ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITE) as string)
    : initialStatePerson,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(localStorageTypes.FAVORITE, action.payload);
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );
      setLocalStorage(localStorageTypes.FAVORITE, filteredState);
      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
