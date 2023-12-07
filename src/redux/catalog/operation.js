import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const catalogApi = axios.create({
  baseURL: "https://6571185809586eff664239df.mockapi.io",
})

export const fetchCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await catalogApi.get("/adverts", {
        params: {
          p: page,
          l: limit
        }
      });
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);