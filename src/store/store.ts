import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import { loadPlayers, loadBuildings, getWeek, addPlayerAndUpdate, updatePlayerContributions } from './asyncActions';

type initialStateType = {
  players: Player[];
  buildings: Building[];
  statusGetPlayers: 'loading' | 'finished' | 'failed' | null;
  statusGetBuildings: 'loading' | 'finished' | 'failed' | null;
  currentWeek: Week | null;
  statusGetWeek: 'loading' | 'finished' | 'failed' | null;
  statusAddPlayer: 'loading' | 'finished' | 'failed' | null;
  statusUpdateContributions: 'loading' | 'finished' | 'failed' | null;
  isGM: boolean;
}

const initialState: initialStateType = {
  players: [],
  buildings: [],
  statusGetPlayers: null,
  statusGetBuildings: null,
  currentWeek: { current: 1, lastUpdate: '' },
  statusGetWeek: null,
  statusAddPlayer: null,
  statusUpdateContributions: null,
  isGM: sessionStorage.isGM ? true : false
};

const appSlice = createSlice({
  name: 'main-store',
  initialState,
  reducers: {
    setGMState: (state, action) => {
      state.isGM = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      
      //Players loading
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

      //Buildings loading
      .addCase(loadBuildings.pending, (state) => {
        state.statusGetBuildings = "loading";
      })
      .addCase(loadBuildings.fulfilled, (state, action) => {
        state.statusGetBuildings = "finished";
        if (action.payload) state.buildings = action.payload;
      })
      .addCase(loadBuildings.rejected, (state) => {
        state.statusGetBuildings = "failed";
      })

      //Week loading
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

      .addCase(addPlayerAndUpdate.pending, (state) => {
        state.statusAddPlayer = "loading";
      })
      .addCase(addPlayerAndUpdate.fulfilled, (state) => {
        state.statusAddPlayer = "finished";
      })
      .addCase(addPlayerAndUpdate.rejected, (state) => {
        state.statusAddPlayer = "failed";
      })

      .addCase(updatePlayerContributions.pending, (state) => {
        state.statusUpdateContributions = "loading";
      })
      .addCase(updatePlayerContributions.fulfilled, (state) => {
        state.statusUpdateContributions = "finished";
      })
      .addCase(updatePlayerContributions.rejected, (state) => {
        state.statusUpdateContributions = "failed";
      })
  }
})

export const { setGMState } = appSlice.actions;

export const store = configureStore({
  reducer: appSlice.reducer,
  middleware: [thunk, ...getDefaultMiddleware()]
})
