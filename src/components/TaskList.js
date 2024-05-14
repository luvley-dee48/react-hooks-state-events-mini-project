import React from "react";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
        <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text} ({task.category})
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default TaskList;
