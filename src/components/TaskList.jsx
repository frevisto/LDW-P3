import { useTasks } from "../context/TaskContext";

export default function TaskList({ categoryId }) {
  const { tasks, toggleTask } = useTasks();

  const filtered = tasks.filter(t => t.categoryId === categoryId);

  return (
    <div className="task-list">
     <p>Tarefas</p>
      {filtered.map(task => (
        <label key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />
          <span className={task.done ? "done" : ""}>{task.text}</span>
        </label>
      ))}

      {filtered.length === 0 && (
        <p className="empty">Nenhuma tarefa ainda.</p>
      )}
    </div>
  );
}
