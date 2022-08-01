import { createSlice } from "@reduxjs/toolkit";

const initState = {
  saved: [],
};

const artistSlice = createSlice({
  name: "artists",
  initialState: initState,
  reducers: {
    add: (state, action) => {
      state.saved.push(action.payload);
    },
    remove: (state, action) => {
      state.saved = state.saved.filter((e) => e.id != action.payload.id);
    },
  },
});

export const { add, remove } = artistSlice.actions;
export default artistSlice.reducer;
