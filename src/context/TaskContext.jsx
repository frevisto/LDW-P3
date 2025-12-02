import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addCategory = (name) => {
    setCategories([...categories, { id: uuid(), name }]);
  };

  const addTask = (categoryId, text) => {
    setTasks([
      ...tasks,
      { id: uuid(), categoryId, text, done: false }
    ]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(t =>
      t.id === taskId ? { ...t, done: !t.done } : t
    ));
  };

  return (
    <TaskContext.Provider value={{
      categories,
      tasks,
      addCategory,
      addTask,
      toggleTask
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
