import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPlayers, fetchWeek } from "../firebase/firebaseAPI";

const loadPlayers = createAsyncThunk(
  'loadPlayers',
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
      await fetchWeek()
        .then((res) => {
          const data = res.data();
          return data;
        })
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
)

export { loadPlayers, getWeek }