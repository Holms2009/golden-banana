import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import { loadPlayers, loadBuildings, loadContributionsHistory, loadGuildData } from './asyncActions';

type initialStateType = {
  players: Player[];
  buildings: Building[];
  contributionsHistory: Contribution[][],
  statusGetPlayers: 'loading' | 'finished' | 'failed' | null;
  statusGetBuildings: 'loading' | 'finished' | 'failed' | null;
  currentWeek: Week | null;
  statusGetWeek: 'loading' | 'finished' | 'failed' | null;
  guildData: any;
}

const initialState: initialStateType = {
  players: [],
  buildings: [],
  contributionsHistory: [],
  statusGetPlayers: null,
  statusGetBuildings: null,
  currentWeek: { current: 1, lastUpdate: '' },
  statusGetWeek: null,
  guildData: {}
};

const appSlice = createSlice({
  name: 'main-store',
  initialState,
  reducers: {  },
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

      //WContributions history loading
      .addCase(loadContributionsHistory.fulfilled, (state, action) => {
        if (action.payload) state.contributionsHistory = action.payload;
      })

      //Guild data
      .addCase(loadGuildData.fulfilled, (state, action) => {
        state.guildData = action.payload
      })
  }
})

export const store = configureStore({
  reducer: appSlice.reducer,
  middleware: [thunk, ...getDefaultMiddleware()]
})

export type RootState = ReturnType<typeof appSlice.reducer>;
export type AppDispatch = typeof store.dispatch;
