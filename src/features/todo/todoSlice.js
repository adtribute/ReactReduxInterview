import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listItems: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.listItems.push(action.payload);
    },
    remove: (state) => {
      state.listItems.pop();
    },
  },
});

export const { add, remove } = todoSlice.actions;

export const selectCount = (state) => state.todo.value;

export const selectState = (state) => state;

export const selectItems = (state) => state.todo.listItems;

export default todoSlice.reducer;
