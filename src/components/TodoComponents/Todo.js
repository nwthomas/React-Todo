import React from "react";
import "./Todo.css";

const Todo = props => (
  <p
    onClick={() => props.makeLineThrough(props.id)}
    style={{ textDecoration: props.textDecoration }}
    className={`todo__item ${props.className}`}
  >
    {props.index + 1}. {props.task}
  </p>
);

export default Todo;
