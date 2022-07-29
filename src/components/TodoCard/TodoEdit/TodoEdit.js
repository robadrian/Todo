import React from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import './TodoEdit.css';
import useInput from "../../../hooks/useInput";

const TodoEdit = (props) => {

const [editedTodo, setEditedTodo] = useInput();

const onClickHanlder = () => {
   if (editedTodo.length > 5) {
      props.edit(props.id, editedTodo);
   } else {
      alert('You need to write more that 5 characters');
   }
}

const back = () => {
   props.isEditing();
}

 return (
    <>
    <input className="editInput"  type="text" defaultValue={props.todo} onChange={setEditedTodo}/>
    <HiOutlineClipboardCopy className="icon" onClick={onClickHanlder}/>
    <IoIosArrowForward className="icon" onClick={back}/>
    </>
 )
}

export default TodoEdit;