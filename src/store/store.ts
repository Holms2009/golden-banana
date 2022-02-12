import { createSlice, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import thunk from 'redux-thunk';

import { loadPlayers } from './asyncActions';

type initialStateType = {
  players: Player[],
  statusGetPlayers: 'loading' | 'finished' | 'failed' | null,
  error: any
}

const initialState: initialStateType = {
  players: [],
  statusGetPlayers: null,
  error: ''
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
      .addCase(loadPlayers.rejected, (state, action: any) => {
        state.statusGetPlayers = "failed";     
      })
  }
})

export const store = configureStore({
  reducer: playersSlice.reducer,
  middleware: [thunk, ...getDefaultMiddleware()]
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectPlayers = (state: RootState) => state.players;
export const getDataFetchStatus = (state: RootState) => state.statusGetPlayers;