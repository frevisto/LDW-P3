import { useTasks } from "../context/TaskContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function CategoryList() {
  const { categories } = useTasks();

  return (
    <div className="category-list">
      {categories.map(cat => (
        <div key={cat.id} className="category-card">
          <h2>{cat.name}</h2>

          {/* Formulário para adicionar tarefas nesta categoria */}
          <AddTask categoryId={cat.id} />

          {/* Lista das tarefas pertencentes a ela */}
          <TaskList categoryId={cat.id} />
        </div>
      ))}
    </div>
  );
}
