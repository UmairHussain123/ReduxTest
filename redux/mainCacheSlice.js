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
      console.log("payload", payload.dept);
      console.log("state data ", state.stuData);
      console.log("11111111111 ", state.stuData.indexOf(payload.dept));
      if (state.stuData.indexOf(payload.dept) == -1) {
        if (payload.dept == "Reg") {
          var objIndex = state.stuData.findIndex((obj) => obj.id == 0);
          console.log("Before update Reg>: ", state.stuData[objIndex]);
          state.stuData[objIndex].name = payload.name;
          state.stuData[objIndex].lastName = payload.lastName;
        } else if (payload.dept == "Exm") {
          var objIndex = state.stuData.findIndex((obj) => obj.id == 1);
          console.log("Before update Exm>: ", state.stuData[objIndex]);
          state.stuData[objIndex].name = payload.name;
          state.stuData[objIndex].lastName = payload.lastName;
        } else if (payload.dept == "Cr") {
          var objIndex = state.stuData.findIndex((obj) => obj.id == 2);
          console.log("Before update Cr>: ", state.stuData[objIndex]);
          state.stuData[objIndex].name = payload.name;
          state.stuData[objIndex].lastName = payload.lastName;
        }
      } else {
        state.stuData = state.stuData.concat(payload);
      }

      // var deptData = state.stuData.find((e) => e.dept == payload.dept);
      // console.log("ddd mn0", deptData);
      // var objIndex = state.stuData.findIndex((obj) => obj.dept == "Reg");

      // console.log("Before update: ", state.stuData[objIndex]);

      // const obj = action.payload;

      // console.log("state.stuData", state.stuData);
    },
  },
});

export const { reset, updateStuData } = mainCacheSlice.actions;

export default mainCacheSlice.reducer;
