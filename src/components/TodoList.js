import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo, filter, onFilterChange, category }) => {
  const handleDelete = (taskId) => {
    deleteTodo(taskId);
  };

  const handleToggleComplete = (taskId, category) => {
    toggleComplete(taskId, category);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    }
    if (filter === "pending") {
      return !todo.completed;
    }
    return true; // Mostrar todas las tareas si el filtro es "all"
  });

  return (
    <div>
      {/* Agregamos el componente de filtro */}
      <div className="button-container">
        <button
          onClick={() => onFilterChange("all")}
          className={`buttonf button-all ${filter === "all" ? "active" : ""}`}
        >
          Todas
        </button>

        <button
          onClick={() => onFilterChange("pending")}
          className={`buttonf button-pending ${filter === "pending" ? "active" : ""}`}
        >
          Pendientes
        </button>
        
        <button
          onClick={() => onFilterChange("completed")}
          className={`buttonf button-completed ${filter === "completed" ? "active" : ""}`}
        >
          Completadas
        </button>

      </div>
      <h2>Lista de tareas:</h2>
      <ul>
        {filteredTodos.map((todo) => (
                      <Todo
                      key={todo.id}
                      todo={todo}
                      toggleComplete={handleToggleComplete}
                      deleteTodo={handleDelete}
                      editTodo={editTodo}
                      category={todo.category}
                    />
        ))}
      </ul>

      
    </div>
  );
};

export default TodoList;