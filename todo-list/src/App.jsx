import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import TaskInput from "./components/TaskInput";
import MembersList from "./components/MembersList";

const App = (props) => {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build a To-Do List",
    "Master JavaScript",
    "Apply for Jobs"
  ]);
  const [newTask, setNewTask] = useState("");
  const [checkedTasks, setCheckedTasks] = useState({});

  const handleAddTask = () => {
   
  };

  const handleCheckChange = (index) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleDeleteCheckedTasks = () => {
    
  };

  return (
    <div className="bg-gray-100 flex justify-center mx-auto flex-col items-center py-10 h-75vh w-220 border border-black m-5 rounded-xl">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <ToDoList tasks={tasks} checkedTasks={checkedTasks} handleCheckChange={handleCheckChange} />
      <TaskInput newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask} handleDeleteCheckedTasks={handleDeleteCheckedTasks} />
      <MembersList />
    </div>
  );
};

export default App;