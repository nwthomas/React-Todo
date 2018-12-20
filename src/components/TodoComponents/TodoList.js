import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo__list">
      {[
        props.tasks.map((task, index) => {
          return (
            <Todo
              makeLineThrough={props.makeLineThrough}
              textDecoration={task.textDecoration}
              className={task.textDecoration}
              key={task.id}
              task={task.task}
              id={task.id}
              index={index}
            />
          );
        })
      ]}
    </div>
  );
};

export default TodoList;
