
import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: 'Complete project report', completed: false, dueDate: '2024-10-10' },
    { id: uuidv4(), title: 'Plan weekend trip', completed: true, dueDate: '2024-10-15' }
  ]);

  const reorderTasks = (startIndex, endIndex) => {
    const result = Array.from(tasks);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTasks(result);
  };

 
  const addTask = (title, dueDate) => {
    setTasks([...tasks, { id: uuidv4(), title, completed: false, dueDate }]);
  };

 
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      tasks.forEach(task => {
        const dueDate = new Date(task.dueDate);
        const now = new Date();
        if (dueDate > now && (dueDate - now) < 24 * 60 * 60 * 1000) {
          new Notification('Reminder!', { body: `Task "${task.title}" is due soon!` });
        }
      });
    }, 60 * 1000); 

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompletion, deleteTask, reorderTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

