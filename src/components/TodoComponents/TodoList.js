import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo__list">
      {[
        props.tasks.map(task => {
          return (
            <Todo
              makeLineThrough={props.makeLineThrough}
              textDecoration={task.textDecoration}
              className={task.textDecoration}
              key={task.id}
              task={task.task}
              id={task.id}
            />
          );
        })
      ]}
    </div>
  );
};

export default TodoList;
