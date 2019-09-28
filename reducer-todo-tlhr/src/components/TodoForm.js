import React, { useState } from "react";

const TodoForm = props => {
  const [input, setInput] = useState("");

  const handleChanges = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.dispatch({ type: "ADD_TODO", payload: input });

    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="create a new todo"
          value={input}
          onChange={handleChanges}
        />
        <button disabled={input === ""}>add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
