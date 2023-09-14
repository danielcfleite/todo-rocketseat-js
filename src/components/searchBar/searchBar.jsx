import Plus from "../../assets/plus.svg";
import style from "./SearchBar.module.css";
import { FormEvent, useState } from "react";

export function SearchBar({ addTodo }) {
  const [taskValue, setTaskValue] = useState("");

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ value: taskValue, completed: false });
  };
  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={taskValue}
          onChange={handleChange}
        />
        <button type="submit">
          Criar <img src={Plus} alt="" />
        </button>
      </form>
    </div>
  );
}
