
import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = () => {
  const { tasks, reorderTasks } = useContext(TaskContext);
  const [sortOrder, setSortOrder] = useState('default');

  // Sort tasks based on the sort order
  const sortedTasks = () => {
    if (sortOrder === 'completed') {
      return [...tasks].sort((a, b) => b.completed - a.completed);
    } else if (sortOrder === 'pending') {
      return [...tasks].sort((a, b) => a.completed - b.completed);
    }
    return tasks;
  };

  // Handle drag-and-drop end
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    reorderTasks(result.source.index, result.destination.index);
  };

  return (
    <div>
      <div className="sort-buttons">
        <button onClick={() => setSortOrder('completed')}>Sort by Completed</button>
        <button onClick={() => setSortOrder('pending')}>Sort by Pending</button>
        <button onClick={() => setSortOrder('default')}>Default</button>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sortedTasks().map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem task={task} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;

