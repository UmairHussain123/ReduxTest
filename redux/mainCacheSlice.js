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
      const payload = action.payload ? action.payload : "";
      // console.log("payload", payload);

      state.stuData = state.stuData.concat(payload);
      // const obj = action.payload;

      // console.log("state.stuData", state.stuData);
    },
  },
});

export const { reset, updateStuData } = mainCacheSlice.actions;

export default mainCacheSlice.reducer;
