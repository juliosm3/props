import { useState } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="card">
      <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;