import React from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import './TodoEdit.css';
import useInput from "../../../hooks/useInput";

const TodoEdit = (props) => {

const [editedTodo, setEditedTodo] = useInput();

const onClickHanlder = () => {
   if (editedTodo.length > 7) {
      props.edit(props.id, editedTodo);
      props.isEditing();
      setEditedTodo('');
   } else {
      alert('You need to write more that 7 characters');
   }
}

 return (
    <>
    <input className="editInput"  placeholder={props.todo} onChange={setEditedTodo}/>
    <HiOutlineClipboardCopy className="icon" onClick={onClickHanlder}/>
    </>
 )
}

export default TodoEdit;