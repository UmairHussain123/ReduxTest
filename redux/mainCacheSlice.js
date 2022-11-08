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
        state.stuData = state.stuData.concat(payload);
      } else {
        arr[index] = payload;
      }

      // console.log("indexxxxxxx", IndexReplace);
      console.log("payload", payload.dept);
      // var index = items.indexOf(3452);
      // if(state.length==0){
      //   state.stuData = state.stuData.concat(payload);
      // }

      // if (state.stuData.length !== 0) {
      //   console.log("if");
      //   if (state.stuData[0].dept == payload.dept) {
      //     state.stuData[0] = payload;
      //   } else if (state.stuData[1].dept == payload.dept) {
      //     state.stuData[1] = payload;
      //   } else if (state.stuData[2] == payload.dept) {
      //     state.stuData[2] = payload;
      //   }
      // } else {
      //   console.log("eleseeeee");
      //   state.stuData = state.stuData.concat(payload);
      // }
      // state.stuData = state.stuData.concat(payload);

      // console.log("state data ", state.stuData);
      // console.log("11111111111 ", state.stuData.indexOf(payload.dept));
      // if (state.stuData.indexOf(payload.dept) == -1) {
      //   if (payload.dept == "Reg") {
      //     var objIndex = state.stuData.findIndex((obj) => obj.id == 0);
      //     console.log("Before update Reg>: ", state.stuData[objIndex]);
      //     state.stuData[objIndex].name = payload.name;
      //     state.stuData[objIndex].lastName = payload.lastName;
      //   } else if (payload.dept == "Exm") {
      //     var objIndex = state.stuData.findIndex((obj) => obj.id == 1);
      //     console.log("Before update Exm>: ", state.stuData[objIndex]);
      //     state.stuData[objIndex].name = payload.name;
      //     state.stuData[objIndex].lastName = payload.lastName;
      //   } else if (payload.dept == "Cr") {
      //     var objIndex = state.stuData.findIndex((obj) => obj.id == 2);
      //     console.log("Before update Cr>: ", state.stuData[objIndex]);
      //     state.stuData[objIndex].name = payload.name;
      //     state.stuData[objIndex].lastName = payload.lastName;
      //   }
      // } else {
      // }

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
