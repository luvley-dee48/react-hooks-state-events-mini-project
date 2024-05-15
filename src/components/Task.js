import React from "react";

function Task({ task, onDelete }) {
  return (
    <div className="task">
      <div className="label">{task.category}CATEGORY HERE</div>
      <div className="text">{task.text}TEXT HERE</div>
      <button className="delete">onClick={() => onDelete(task.id)}X</button>
    </div>
  );
}

export default Task;
