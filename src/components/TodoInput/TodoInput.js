import React from "react";
import "./TodoInput.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import useInput from "../../hooks/useInput";

const TodoInput = (props) => {
  const [todo, setTodo, clear] = useInput();

  const onClickHandler = (e) => {
    e.preventDefault();
    if (todo.length > 5) {
      props.addToList(todo);
      clear("");
    } else {
      alert("Please write more than 5 Characters");
    }
  };

  return (
    <form onSubmit={onClickHandler}>
      <input placeholder="New Todo" value={todo} onChange={setTodo} />
      <button type="submit">
        <IoIosAddCircleOutline className="addIcon" />
      </button>
    </form>
  );
};

export default TodoInput;
