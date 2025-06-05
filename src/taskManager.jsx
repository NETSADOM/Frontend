import React, { useState } from "react";
import "./TaskManager.css";
import background from "./assets/background.jpg";



function Taskmanager() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Read a book", completed: true },
  ]);

  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") return;

    const newId = tasks.length + 1;
    const newTask = { id: newId, title: task, completed: false };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function Complete(id) {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(newTasks);
  }

  function deleteTask(id) {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <div className="container">
        <h1>GOOD TO SEE YOU!</h1>
      <h2>Task Manager</h2>
      <img src={background} alt="Background" className="background-image" />


      <input
        type="text"
        placeholder="New task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input"
      />
      <button onClick={addTask} className="add-button">
        Add
      </button>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => Complete(task.id)}
              className="checkbox"
            />
            <span className="task-title">{task.title}</span>
            <button onClick={() => deleteTask(task.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Taskmanager;
