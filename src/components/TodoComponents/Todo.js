import React from "react";

const Todo = props => (
  <p
    onClick={() => props.makeLineThrough(props.id)}
    style={{ textDecoration: props.textDecoration }}
    className={`todo__item ${props.className}`}
  >
    {props.task}
  </p>
);

export default Todo;
