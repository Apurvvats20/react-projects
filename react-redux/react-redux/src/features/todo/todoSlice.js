// todoSlice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      if (todo.text.length > 0) {
        state.todos.push(todo);
      } else {
        alert("Todo cannot be empty");
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const editedTodoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (editedTodoIndex !== -1) {
        state.todos[editedTodoIndex].text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
