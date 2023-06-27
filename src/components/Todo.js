import React, { useState } from "react";

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo, category }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);
  const [editedCategory, setEditedCategory] = useState(todo.category);

const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    }).format(date);
};

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editedTask, editedCategory);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(todo.task);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setEditedCategory(e.target.value);
  };

  return (
    <li className={`${todo.completed ? "completed" : ""} ${todo.deleted ? "deleted" : ""}`}>
      {isEditing ? (
        <>
          <input placeholder="Ingresa la tarea" type="text" value={editedTask} onChange={handleChange} />
          <input placeholder="Ingresa la categoría" type="text" value={editedCategory} onChange={handleCategoryChange} />
          <div className="containerEdit">
            <button className="boton-guardar" onClick={handleSave}>Guardar</button>
            <button className="boton-cancelar" onClick={handleCancel}>Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <span>{todo.task}</span>
          <div className="containerCategory">
          <span className="category">{category}</span> 
          </div>
          <div className="task-details">
            <div className="container-task-dates">
              <p className="pInicio">Creada:</p> {formatDate(todo.createdAt)}
            </div>
            {todo.dueDate && (
              <div>
                <p>Fin:</p> {formatDate(todo.dueDate)}
              </div>
            )}
          </div>
          <div className="task-container">
            <button className="boton-completar" onClick={handleToggleComplete}>✔</button>
            <button className="boton-delete" onClick={handleDelete}>X</button>
            <button className="boton-editar" onClick={handleEdit}>Editar</button>
          </div>
        </>
      )}
    </li>
  );
};

export default Todo;