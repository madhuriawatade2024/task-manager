
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { toggleTaskCompletion, deleteTask } = useContext(TaskContext);

  return (
    <div className="task-item">
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.title} - Due: {task.dueDate}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
