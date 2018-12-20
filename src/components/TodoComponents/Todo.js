import React from "react";

const Todo = props => (
  <p
    style={{ textDecoration: props.textDecoration }}
    className={props.className}
  >
    {props.task}
  </p>
);

export default Todo;
