import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {  addTodo, getTodos, removeTodo } from './todoAPI';

const initialState = {
  todos: [],
};

export const addTodoAction = createAsyncThunk(
  'todo/addTodo',
  async (todo) => {
    const { todos } = await addTodo(todo);
    return todos;
  }
);

export const removeTodoAction = createAsyncThunk(
  'todo/removeTodo',
  async () => {
    const { todos } = await removeTodo();
    return todos;
  }
);

export const getTodosAction = createAsyncThunk(
  'todo/getTodos',
  async () => {
    const { todos } = await getTodos();
    return todos;
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
  },
  extraReducers: builder => builder
    .addCase(addTodoAction.fulfilled, (mutableState, toolkitAction) => {
      const todos = toolkitAction.payload;
      mutableState.todos = todos;
    })
    .addCase(removeTodoAction.fulfilled, (mutableState, toolkitAction) => {
      const todos = toolkitAction.payload;
      mutableState.todos = todos;
    })
    .addCase(getTodosAction.fulfilled, (mutableState, toolkitAction) => {
      const todos = toolkitAction.payload;
      mutableState.todos = todos;
    })
});

export const { add, remove } = todoSlice.actions;

export default todoSlice.reducer;
