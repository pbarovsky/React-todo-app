import React, { useState } from "react";
import sc from "./ToDo.module.css";

function ToDo({ todo, toggleTask, removeTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTask(todo.task);
  };

  const handleSave = () => {
    if (editedTask.trim() !== "") {
      editTask(todo.id, editedTask);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask(todo.task);
  };

  return (
    <li className={sc["todo-item"]}>
      {isEditing ? (
        <div className={sc["editing-container"]}>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            autoFocus
          />
          <div className={sc["edit-buttons"]}>
            <button className={sc["save-button"]} onClick={handleSave}>
              <i className="bi bi-check-circle"></i>
            </button>
            <button className={sc["cancel-button"]} onClick={handleCancel}>
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`${sc["todo-text"]} ${todo.complete ? sc.completed : ""}`}
          onClick={() => toggleTask(todo.id)}
        >
          {todo.task}
        </div>
      )}
      <div className={sc["todo-actions"]}>
        <button className={sc["todo-edit"]} onClick={handleEdit}>
          <i className="bi bi-pencil"></i>
        </button>
        <button
          className={sc["todo-delete"]}
          onClick={() => removeTask(todo.id)}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDo;
