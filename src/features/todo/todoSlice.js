import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  randomDataFetch, randomFunction } from './todoAPI';

const initialState = {
  listItems: [],
};


export const randomWork = createAsyncThunk(
  'todo/randomWork',
  async () => {
    const response = randomFunction();
    return response;
  }
);

export const randomData = createAsyncThunk(
  'todo/randomData',
  async () => {
    const response = randomDataFetch();
    return response;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.listItems.push(action.payload);
    },
    remove: (state) => {
      console.log('wtf')
      state.listItems.pop();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(randomData.fulfilled, (state, action) => {
        state.dataStatus = 'idle';
        state.randomData = action.payload;
      });
  },
});

export const { add, remove } = todoSlice.actions;

export const selectCount = (state) => state.todo.value;

export const selectState = (state) => state;

export const selectItems = (state) => state.todo.listItems;

export default todoSlice.reducer;
