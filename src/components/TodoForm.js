import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTodo(task);
      setTask("");
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese una tarea"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TodoForm;
