import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPlayers } from "../firebase/firebaseAPI";

const loadPlayers = createAsyncThunk(
  'loadPlayers',
  async (_, { rejectWithValue }) => {
    try {
      const data: Player[] = [];

      await getPlayers()
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

export { loadPlayers }