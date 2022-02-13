import { createAsyncThunk } from "@reduxjs/toolkit";

import { addPlayer, fetchPlayers, fetchWeek, updateContribution, updateWeek } from "../firebase/firebaseAPI";

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
  'week/get',
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
      addPlayer(player);
    } catch (err: any) {
      console.log(err.message);
    }
  }
)

const updatePlayerContributions = createAsyncThunk(
  'playets/updateContributions',
  async (data: NewContribution) => {
    try {
      await updateContribution(data);
    } catch (err: any) {
      console.log(err.message);
    }
  }
)

const updateWeekAction = createAsyncThunk(
  'week/update',
  async (data: Week) => {
    try {
      await updateWeek(data);
    } catch (err: any) {
      console.log(err.message);

    }
  }
)

export { loadPlayers, getWeek, addPlayerAndUpdate, updatePlayerContributions, updateWeekAction }