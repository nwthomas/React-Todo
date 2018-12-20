import React from "react";
import "./Todo.css";

const TodoForm = props => {
  return (
    <form className="todo__form" onSubmit={props.addTask}>
      <input
        className="text__input"
        type="text"
        name="inputText"
        placeholder="Add new task..."
        value={props.inputText}
        onChange={props.handleChange}
      />
      <button className="todo__btn" type="submit">
        Add Task
      </button>
      <button className="todo__btn" onClick={props.deleteTask} type="button">
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
