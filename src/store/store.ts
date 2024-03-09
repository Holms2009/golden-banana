import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import { loadBuildings, loadHistory, loadGuildData } from './asyncActions';
import { sortHistoryByDate } from "../utils/playersSort";

type initialStateType = {
  buildings: Building[];
  contributionsHistory: THistoryItem[],
  statusGetBuildings: 'loading' | 'finished' | 'failed' | null;
  guildData: TGuild | undefined;
}

const initialState: initialStateType = {
  buildings: [],
  contributionsHistory: [],
  statusGetBuildings: null,
  guildData: undefined
};

const appSlice = createSlice({
  name: 'main-store',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      .addCase(loadHistory.fulfilled, (state, action) => {
        if (action.payload) state.contributionsHistory = sortHistoryByDate(action.payload);
      })

      //Guild data
      .addCase(loadGuildData.fulfilled, (state, action) => {
        state.guildData = action.payload;
      })
  }
});

export const store = configureStore({
  reducer: appSlice.reducer,
  middleware: [thunk, ...getDefaultMiddleware()]
})

export type RootState = ReturnType<typeof appSlice.reducer>;
export type AppDispatch = typeof store.dispatch;
