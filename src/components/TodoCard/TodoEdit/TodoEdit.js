import React from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import './TodoEdit.css';
import useEditedInput from "../../../hooks/useEditedInput";

const TodoEdit = (props) => {

const [editedInput, onChangeHandler] = useEditedInput();

const todoEdited = () => {
    props.switch();
    props.edit(props.id, props.index, editedInput);
}

 return (
    <>
    <input className="editInput" placeholder={props.todo} onChange={onChangeHandler}/>
    <div>
    <HiOutlineClipboardCopy className="icon" onClick={todoEdited}/>
    </div>
    </>
 )
}

export default TodoEdit;