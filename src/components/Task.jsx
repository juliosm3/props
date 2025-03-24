const Task = ({ id, text, completed, deleteTask, toggleTask }) => {
    return (
      <li
        onClick={() => toggleTask(id)}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          marginBottom: '0.5rem',
          cursor: 'pointer'
        }}
      >
        {text}
        <button
          onClick={(e) => { e.stopPropagation(); deleteTask(id); }}
          style={{ marginLeft: '1rem' }}
        >
          Eliminar
        </button>
      </li>
    );
  };
  
  export default Task;  