import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: '0.5rem' }}>Añadir</button>
    </form>
  );
};

export default AddTaskForm;