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
      console.log("state", state.stuData.length);

      console.log("state.stuData.indexOf(payload.dept)", state.stuData);
      var arr = state.stuData;
      var index = arr.findIndex((item) => item.dept === payload.dept);
      console.log("IndexReplace", index);
      // arr[index] = payload;

      if (index == -1) {
        // data push in array with concat
        state.stuData = state.stuData.concat(payload);
      } else {
        arr[index] = payload;
      }

      console.log("payload", payload.dept);
    },
  },
});

export const { reset, updateStuData } = mainCacheSlice.actions;

export default mainCacheSlice.reducer;
