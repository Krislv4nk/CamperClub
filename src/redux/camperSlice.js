import { createSlice } from "@reduxjs/toolkit";
import {
  getCampersThunk, addFavoriteCamperThunk, removeFavoriteThunk,
  refreshFavoritesThunk, getFavoritesThunk
} from "./operations";


const initialState = {
  campers: {
    adverts: [],
    isLoading: false,
    error: null,
    favorites: [],
  },
  favorites: [],
  filter: '',
};


export const camperSlice = createSlice({
    name: 'campers',
    initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampersThunk.pending, (state) => {
        state.campers.isLoading = true;
      })
      .addCase(getCampersThunk.fulfilled, (state, action) => {
        state.campers.isLoading = false;
        state.campers.adverts = action.payload;
        state.error = null;
      })
      .addCase(getCampersThunk.rejected, (state, action) => {
        state.campers.isLoading = false;
        state.campers.error = action.payload;
      })
    .addCase(addFavoriteCamperThunk.fulfilled, (state, action) => {
        state.favorites = [...state.favorites, action.payload];
    })
      .addCase(removeFavoriteThunk.fulfilled, (state, action) => {
        state.favorites.filter((camper) => camper.id !== action.payload.action)
      })
    .addCase(refreshFavoritesThunk.fulfilled, (state, action) => {
      state.favorites = action.payload;
    })
      .addCase(getFavoritesThunk.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
  },
    });
    
    
        
        export const campersReducer = camperSlice.reducer;