import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
    filter: 'all', // all | done | not
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: nanoid(),
        description: action.payload,
        isDone: false,
      });
    },
    toggleDone: (state, action) => {
      const todo = state.list.find(t => t.id === action.payload);
      if (todo) todo.isDone = !todo.isDone;
    },
    editTodo: (state, action) => {
      const { id, description } = action.payload;
      const todo = state.list.find(t => t.id === id);
      if (todo) todo.description = description;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleDone, editTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
