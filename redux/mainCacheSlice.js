import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
const initialState = {
  stuData: [],

  // Section AddOns Start
  storage_keys: {},
};

export const mainCacheSlice = createSlice({
  name: "mainCache",
  initialState: initialState,
  reducers: {
    reset: (state, action) => {
      Object.assign(state, initialState);
    },
    updateStuData: (state, action) => {
      state.stuData = action.payload ? action.payload : "";

      console.log(state);
    },
  },
});

export const { reset, updateStuData } = mainCacheSlice.actions;

export default mainCacheSlice.reducer;
