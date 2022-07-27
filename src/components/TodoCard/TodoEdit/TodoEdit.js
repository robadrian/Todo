import React from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import './TodoEdit.css'
const TodoEdit = (props) => {

const todoEdited = () => {
    props.switch();
}

 return (
    <>
    <input className="editInput" placeholder={props.todo} onChange={props.onChange}/>
    <div>
    <HiOutlineClipboardCopy className="icon" onClick={todoEdited}/>
    </div>
    </>
 )
}

export default TodoEdit;