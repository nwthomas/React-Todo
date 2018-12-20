import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form className="todo__form" onSubmit={props.addTask}>
      <input
        type="text"
        name="inputText"
        placeholder="Add new task..."
        value={props.inputText}
        onChange={props.handleChange}
      />
      <button type="submit">Add Todo</button>
      <button onClick={props.deleteTask} type="button">
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
