import React from "react";

const Todo = props => {
  {
    console.log(props);
  }
  return <h4 className={props.className}>{props.task}</h4>;
};

export default Todo;
