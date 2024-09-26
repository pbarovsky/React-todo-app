import React, { useState } from 'react';
import sc from './ToDoForm.module.css'

function ToDoForm({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Добавить заметку..."
      />
      <button type="submit">
        <i className="bi bi-plus-circle"></i>
      </button>
    </form>
  );
}

export default ToDoForm;
