import style from "./Task.module.css";
import Trash from "../../assets/Trash.svg";
import NotFilled from "../../assets/notFilled.svg";
import Checked from "../../assets/checked.svg";
import { useState } from "react";

export function Task({ value, completed, onDelete, id, onCompleted, ...rest }) {
  const [isCompleted, setIsCompleted] = useState(false);
  function changeStatus() {
    setIsCompleted((current) => !current);
  }
  return (
    <>
      <div className={isCompleted ? style.completed : style.task}>
        <img
          src={isCompleted ? Checked : NotFilled}
          onClick={() => {
            onCompleted(isCompleted);
            changeStatus();
          }}
        />
        <p>{value}</p>
        <img
          src={Trash}
          alt="Delete"
          onClick={() => onDelete(value, isCompleted)}
        />
      </div>
    </>
  );
}
