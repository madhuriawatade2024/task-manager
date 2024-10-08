# Task Management Dashboard

## Overview
The **Task Management Dashboard** is a web-based application built with React.js that helps users manage their tasks efficiently. It includes features such as task creation, drag-and-drop reordering, sorting tasks by completion status, and browser notifications for upcoming due tasks.

![Task Management Dashboard Screenshot](screenshot.png)

### Features:
- **Add Tasks**: Users can add tasks with due dates.
- **Mark as Completed**: Tasks can be toggled between completed and pending.
- **Drag-and-Drop**: Users can rearrange tasks by dragging and dropping.
- **Sort Tasks**: Sort tasks by completed or pending status.
- **Notifications**: Users receive browser notifications for tasks that are due within 24 hours.
  
## Demo
[Live Demo Link](https://your-demo-link.com) *(optional)*

## Technologies Used
- **React.js**: For the user interface.
- **Context API**: To manage global state.
- **UUID**: For generating unique task IDs.
- **react-beautiful-dnd**: For drag-and-drop functionality.
- **CSS3**: For styling the application.

## Installation & Setup
To run this project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/task-management-dashboard.git
    cd task-management-dashboard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. The app will be available at `http://localhost:3000`.

## Usage
### Adding a Task
- Input a task title and a due date in the task form and click "Add Task".
- Tasks are listed in the order they are added.

### Drag-and-Drop
- You can reorder tasks by dragging and dropping them.

### Sorting Tasks
- Use the sorting buttons at the top to sort tasks by completed or pending status.

### Deleting a Task
- Each task has a "Delete" button that allows you to remove the task.

### Notifications
- If the browser allows notifications, the app will remind you of tasks due within 24 hours.

## Folder Structure

. ├── public │ └── index.html ├── src │ ├── components │ │ ├── AddTask.js # Task input form component │ │ ├── TaskItem.js # Single task item component │ │ └── TaskList.js # Task list and sorting/drag-and-drop component │ ├── context │ │ └── TaskContext.js # Context to manage task state globally │ ├── App.js # Main App component │ └── App.css # Stylesheet for the app ├── .gitignore ├── package.json └── README.md


## Dependencies
- **react**: ^18.x.x
- **react-dom**: ^18.x.x
- **react-scripts**: ^5.x.x
- **react-beautiful-dnd**: ^13.x.x
- **uuid**: ^9.x.x

## Contributing
If you'd like to contribute to this project:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License.

