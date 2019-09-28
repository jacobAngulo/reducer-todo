import React from "react";

const TodoList = props => {
  const handleToggleCompleted = id => {
    props.dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  return (
    <div>
      <ul>
        {props.todos.map(todo => {
          return (
            <li
              key={todo.id}
              className={todo.completed ? "completed" : ""}
              onClick={() => handleToggleCompleted(todo.id)}
            >
              {todo.task}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
