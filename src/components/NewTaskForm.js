import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), text, category };
    onTaskFormSubmit(newTask);
    setText(''); // Clear form after submission
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)}  />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
         <option value="">Select a category</option>
           {categories.map((category) => (
    <option key={category.id} value={category.name}>{category.name}</option>
  ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
