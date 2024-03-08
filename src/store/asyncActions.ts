import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPlayers, fetchBuildings, updateWeek, fetchContributionsHistory } from "../firebase/firebaseAPI";
import { fetchGuildData } from "../smartyApi";

const loadPlayers = createAsyncThunk(
  'players/loadPlayers',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPlayers()
        .then(res => res.json())
        .then(data => data)
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
)

const loadContributionsHistory = createAsyncThunk(
  'players/contributionsHistory',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchContributionsHistory()
        .then(res => res.json())
        .then(data => data)
    } catch (err: any) {
      rejectWithValue(err);
    }
  }
)

const loadBuildings = createAsyncThunk(
  'buildings/loadBuildings',
  async (_, { rejectWithValue }) => {
    try {
      const data: Building[] = [];

      await fetchBuildings()
        .then((res) => {
          res.forEach(item => {
            data.push(item.data() as Building)
          })
        })

      return data;
    } catch (err: any) {
      return rejectWithValue(err.message);
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

const loadGuildData = createAsyncThunk(
  'guild/loadData',
  async (guildId: string) => {
    try {
      return await fetchGuildData(guildId);
    } catch (err: any) {
      console.log(err.message);      
    }
  }
)

export {
  loadPlayers,
  loadBuildings,
  loadContributionsHistory,
  updateWeekAction,
  loadGuildData
}