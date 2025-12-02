import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTask({ categoryId }) {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(categoryId, text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <input 
        type="text"
        placeholder="Digite a tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>OK</button>
    </form>
  );
}
