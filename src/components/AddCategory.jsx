import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddCategory() {
  const { addCategory } = useTasks();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addCategory(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="box">
      <h3>Nova Categoria</h3>
      <input 
        type="text"
        placeholder="Ex: Estudos"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
