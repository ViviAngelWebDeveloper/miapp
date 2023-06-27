import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]); // Estado de las tareas
  const [filter, setFilter] = useState("all"); // Estado del filtro

  // Obtener las tareas almacenadas en el almacenamiento local al cargar la aplicación
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Actualizar las tareas en el almacenamiento local cada vez que cambien
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const addTodo = (task, dueDate) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
      deleted: false,
      createdAt: new Date(),
      dueDate: dueDate ? new Date(dueDate) : null,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (taskId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (taskId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(updatedTodos);
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const editTodo = (taskId, editedTask, editedCategory) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === taskId) {
        return { ...todo, task: editedTask, category: editedCategory };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo-List App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
      todos={todos} 
      toggleComplete={toggleComplete} 
      deleteTodo={deleteTodo} 
      filter={filter}
      onFilterChange={handleFilterChange} 
      editTodo={editTodo}/>
    </div>
  );
};

export default App;