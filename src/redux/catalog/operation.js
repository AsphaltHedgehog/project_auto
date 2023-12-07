import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const catalogApi = axios.create({
  baseURL: "https://6571185809586eff664239df.mockapi.io/adverts",
})

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async (page, thunkApi) => {
    try {
      const { data } = await catalogApi.get("/catalog", {
        params: {
          p: page,
          l: 12
        }
      });
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);