// import React from 'react';
// import { TaskProvider } from './context/TaskContext';
// import TaskList from './components/TaskList';
// import AddTask from './components/AddTask';
// import './App.css';

// function App() {
//   return (
//     <TaskProvider>
//       <div className="App">
//         <h1>Task Management Dashboard</h1>
//         <AddTask />
//         <TaskList />
//       </div>
//     </TaskProvider>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  useEffect(() => {
    // Request Notification Permission
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Management Dashboard</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;

