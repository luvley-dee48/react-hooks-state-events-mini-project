import React, { useState } from 'react';
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1', category: 'Work' },
    { id: 2, title: 'Task 2', description: 'Description 2', category: 'Personal' },
    { id: 3, title: 'Task 3', description: 'Description 3', category: 'Shopping' },
  ]);
  const categories = ["All", "Work", "Personal", "Shopping"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    // Create a new task with a unique id
    const newTaskWithId = {
      ...newTask,
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1
    };
    setTasks([...tasks, newTaskWithId]);
  };

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleSelectCategory} 
      />
      <h2>My tasks</h2>
      <NewTaskForm categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
