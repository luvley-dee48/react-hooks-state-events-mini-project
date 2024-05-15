import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: ""
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={formData.text} 
          onChange={handleChange} 
        />
      </label>
      <label>
        Category
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
        >
          <option value="" disabled>Select a category</option>
          {categories.map((category, index) => 
            category !== "All" && (
              <option key={index} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
