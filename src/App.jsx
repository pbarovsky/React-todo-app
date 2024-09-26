import React, { useState } from 'react';
import ToDo from './ToDo/ToDo';
import ToDoForm from './ToDoForm/ToDoForm';
import sc from './App.module.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const editTask = (id, updatedTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
    );
  };

  return (
    <div className={sc['todo-app']}>
      <h1>Список заметок</h1>
      <div className={sc['todo-counter']}>Количество заметок: {todos.length}</div>
      <ToDoForm addTask={addTask} />
      <ul className={sc['todo-list']}>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleTask={toggleTask}
            removeTask={removeTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;