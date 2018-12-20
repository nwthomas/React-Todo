import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo__list">
      {[
        props.tasks.map((task, index) => {
          return (
            <Todo
              textDecoration={task.textDecoration}
              className="todo__item"
              key={task.id}
              task={task.task}
            />
          );
        })
      ]}
    </div>
  );
};

export default TodoList;
