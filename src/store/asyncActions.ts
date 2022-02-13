import { createAsyncThunk } from "@reduxjs/toolkit";

import { addPlayer, fetchPlayers, fetchWeek } from "../firebase/firebaseAPI";

const loadPlayers = createAsyncThunk(
  'players/loadPlayers',
  async (_, { rejectWithValue }) => {
    try {
      const data: Player[] = [];

      await fetchPlayers()
        .then((res) => {
          res.forEach(item => {
            data.push(item.data() as Player)
          })
        })

      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
)

const getWeek = createAsyncThunk(
  'getWeek',
  async (_, { rejectWithValue }) => {
    try {
      let data;

      await fetchWeek()
        .then((res) => {
          data = res.data() as Week;
        })

      return data;
    } catch (err: any) {
      console.log(err.message);
      return rejectWithValue(err.message);
    }
  }
)

const addPlayerAndUpdate = createAsyncThunk(
  'players/addPlayer',
  async (player: Player) => {
    try {
      console.log('adding player: ', player);
      addPlayer(player);
    } catch (err: any) {
      console.log(err.message);
    }
  }
)

export { loadPlayers, getWeek, addPlayerAndUpdate }