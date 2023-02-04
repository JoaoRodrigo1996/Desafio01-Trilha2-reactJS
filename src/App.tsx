import { Header } from "./components/Header";

import styles from "./App.module.css";

import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Empty } from "./components/Empty";
import { Tasks } from "./components/Tasks";
import "./styles/global.css";

interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [isCompleteCount, setIsCompleteCount] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: Math.random(),
      title: newTaskText,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  function handleToogleTaskComplete(id: number) {
    const checked = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );

    const isTaskCompleted = checked.filter((task) => task.isComplete);

    console.log(isTaskCompleted.length);

    setIsCompleteCount(isTaskCompleted.length);

    setTasks(checked);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Campo obrigatório!");
  }

  function handleDeleteTask(id: number) {
    const deletedTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(deletedTask);
  }

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <main>
          <form onSubmit={handleCreateNewTask}>
            <input
              type="text"
              value={newTaskText}
              onChange={handleNewTaskChange}
              required
              onInvalid={handleNewTaskInvalid}
              placeholder="Adicionar uma nova tarefa"
            />
            <button>
              Criar
              <PlusCircle />
            </button>
          </form>
          <div className={styles.taskInfo}>
            <div className={styles.taskTodo}>
              <p>
                Tarefas criadas <span>{tasks.length}</span>
              </p>
            </div>
            <div className={styles.taskDone}>
              <p>
                Concluídas{" "}
                <span>
                  {isCompleteCount}/{tasks.length}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.todo}>
            {tasks.length === 0 ? (
              <Empty />
            ) : (
              tasks.map((task) => {
                return (
                  <Tasks
                    key={task.id}
                    task={task}
                    onToogleTaskComplete={handleToogleTaskComplete}
                    onDeleteTask={handleDeleteTask}
                  />
                );
              })
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
