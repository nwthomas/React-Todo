import React from "react";
import Todo from "./Todo";

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
