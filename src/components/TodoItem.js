import React from "react";

function TodoItem(props) {
  const completedStyles = {
    fontStyle: "italic",
    color: "green",
    textDecoration: "line-through"
  };

  const unCompletedStyles = {
    fontStyle: "normal",
    color: "red"
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyles : unCompletedStyles}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
