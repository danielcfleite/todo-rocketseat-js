import style from "./ContentApp.module.css";
import Clipboard from "../../assets/Clipboard.svg";
import { Task } from "../task/task";
import { NoTasks } from "../noTasks/noTasks";
import { useState } from "react";
import { SearchBar } from "../searchBar/searchBar";
export function AppContent() {
  const [taskCount, setTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setTaskCount(todos.length + 1);
  };
  function handleOnCompleted(isCompleted) {
    if (isCompleted) {
      setCompletedTaskCount((current) => current - 1);
    } else {
      setCompletedTaskCount((current) => current + 1);
    }
  }
  const handleDeleteTask = (taskId, isCompleted) => {
    const newTodos = todos.filter((todo) => {
      return todo.value !== taskId;
    });
    if (isCompleted) {
      setCompletedTaskCount((current) => current - 1);
      setTodos(newTodos);
      setTaskCount(newTodos.length);
    } else {
      setTodos(newTodos);
      setTaskCount(newTodos.length);
    }
  };

  return (
    <div className={style.content}>
      <SearchBar addTodo={addTodo} />
      <header>
        <strong>
          Tarefas criadas
          <span className={style.numberDisplay}>{taskCount}</span>
        </strong>
        <strong>
          Concluídas
          <span className={style.numberDisplay}>
            {completedTaskCount}/{taskCount}
          </span>
        </strong>
      </header>
      <section>
        {todos.length === 0 ? (
          <NoTasks />
        ) : (
          todos.map((todo, index) => (
            <Task
              value={todo.value}
              completed={todo.completed}
              onDelete={handleDeleteTask}
              key={index}
              id={index}
              onCompleted={handleOnCompleted}
            />
          ))
        )}
      </section>
    </div>
  );
}
