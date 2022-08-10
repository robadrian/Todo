import React from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import "./TodoEdit.css";
import useInput from "../../../hooks/useInput";

const TodoEdit = (props) => {
  const [editedTodo, setEditedTodo, clear] = useInput(props.todo);

  const onClickHandler = () => {
    if (editedTodo.length >= 5) {
      props.edit(props.id, editedTodo);
      clear("");
    } else {
      alert("You need to write more than or equal to 5 characters");
    }
  };

  return (
    <>
      <input
        className="editInput"
        type="text"
        defaultValue={props.todo}
        onChange={setEditedTodo}
      />
      <HiOutlineClipboardCopy className="icon" onClick={onClickHandler} />
    </>
  );
};

export default TodoEdit;
