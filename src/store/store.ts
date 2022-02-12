import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import { loadPlayers, getWeek } from './asyncActions';

type initialStateType = {
  players: Player[];
  statusGetPlayers: 'loading' | 'finished' | 'failed' | null;
  currentWeek: Week | null;
  statusGetWeek: 'loading' | 'finished' | 'failed' | null;
}

const initialState: initialStateType = {
  players: [],
  statusGetPlayers: null,
  currentWeek: null,
  statusGetWeek: null
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPlayers.pending, (state) => {
        state.statusGetPlayers = "loading";
      })
      .addCase(loadPlayers.fulfilled, (state, action) => {
        state.statusGetPlayers = "finished";
        if (action.payload) state.players = action.payload;
      })
      .addCase(loadPlayers.rejected, (state) => {
        state.statusGetPlayers = "failed";     
      })
      .addCase(getWeek.pending, (state) => {
        state.statusGetWeek = "loading";
      })
      .addCase(getWeek.fulfilled, (state, action) => {
        state.statusGetWeek = "finished";
        if (action.payload) state.currentWeek = action.payload;
      })
      .addCase(getWeek.rejected, (state) => {
        state.statusGetWeek = "failed";     
      })
  }
})

export const store = configureStore({
  reducer: playersSlice.reducer,
  middleware: [thunk, ...getDefaultMiddleware()]
})
