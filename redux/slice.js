import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedState: "",
};

const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    updateSelectedState: (state, action) => {
      state.selectedState = action.payload;
    },
  },
});

export const { updateSelectedState } = hospitalSlice.actions;

export default hospitalSlice.reducer;
