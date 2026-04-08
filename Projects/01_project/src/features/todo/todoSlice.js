import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  //functionality
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );

      state.todos.splice(index, 1);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      );

      state.todos[index].text = action.payload.text;
    },
  },
});

//export functionality
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;

console.log(addTodo(1));
