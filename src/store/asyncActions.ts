import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchBuildings, fetchHistory } from "../firebase/firebaseAPI";
import { fetchGuildData } from "../smartyApi";



const loadHistory = createAsyncThunk(
  'players/contributionsHistory',
  async (_, { rejectWithValue }) => {
    try {
      const data: any[] = [];

      await fetchHistory()
        .then((res) => {
          res.forEach(item => {
            data.push(item.data())
          })
        })
      
      return data;
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
  loadHistory,
  loadBuildings,
  loadGuildData
}