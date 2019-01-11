import React from "react";
import PropTypes from "prop-types";
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

Todo.propTypes = {
  className: PropTypes.string,
  style: PropTypes.string
};

export default Todo;
