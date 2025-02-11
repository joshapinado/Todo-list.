import React from "react";

const TaskInput = ({ newTask, setNewTask, handleAddTask, handleDeleteCheckedTasks }) => {
  return (
    <div className="flex items-center gap-3 mr-78">
      
    
      <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-150">
        Add
      </button>
      <button onClick={handleDeleteCheckedTasks} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
        Delete
      </button>
    </div>
  );
};

export default TaskInput;