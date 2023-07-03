import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: 0,
  },
  reducers: {
    increment: (state) => {
      state.todo += 1;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment } = todoSlice.actions;

// export default todoSlice.reducer;
