import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.addCharacters}>
      <input
        type="text"
        name="inputText"
        placeholder="Enter some text here..."
        value={props.inputText}
        onChange={props.handleChange}
      />
      <button type="submit">Add Todo</button>
      <button type="button">Clear Completed</button>
    </form>
  );
};

export default TodoForm;
