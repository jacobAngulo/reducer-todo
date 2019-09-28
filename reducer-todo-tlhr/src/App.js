import React, { useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialState = {
  todos: [
    {
      id: 1569703037898,
      task: "learn the reducer patter",
      completed: true
    },
    {
      id: 1569703347898,
      task: "learn redux",
      completed: false
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action);
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), task: action.payload, completed: false }
        ]
      };

    case "TOGGLE_COMPLETED":
      console.log(action);

      return {
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };

    case "CLEAR_COMPLETED":
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state, dispatch);

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm dispatch={dispatch} />
        <button onClick={handleClearCompleted}>clear completed</button>
        <TodoList todos={state.todos} dispatch={dispatch} />
      </header>
    </div>
  );
};

export default App;
