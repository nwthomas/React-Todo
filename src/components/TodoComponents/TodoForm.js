import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        name="inputText"
        placeholder="Add new task..."
        value={props.inputText}
        onChange={props.handleChange}
      />
      <button onClick={props.addTask}>Add Todo</button>
      <button type="button">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
