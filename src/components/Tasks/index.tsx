import { Trash } from "phosphor-react";
import styles from "./styles.module.css";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TasksProps {
  task: Task;

  onDeleteTask: (id: number) => void;
  onToogleTaskComplete: (id: number) => void;
}

export function Tasks({
  task,
  onDeleteTask,
  onToogleTaskComplete,
}: TasksProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function taskIsComplete() {
    onToogleTaskComplete(task.id);
  }

  return (
    <div className={styles.tasks}>
      <div className="">
        <input
          type="checkbox"
          checked={task.isComplete}
          readOnly
          onClick={taskIsComplete}
        />
      </div>
      <p className={task.isComplete ? styles.completed : ""}>{task.title}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
