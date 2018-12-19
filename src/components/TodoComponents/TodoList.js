import React from "react";
import Todo from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  return (
    <div className="todo__list">
      {[
        props.tasks.map((task, index) => {
          return <Todo className="todo__item" key={index} task={task.task} />;
        })
      ]}
    </div>
  );
};

export default TodoList;
