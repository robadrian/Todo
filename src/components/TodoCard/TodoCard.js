import React from "react";
import './TodoCard.css'
import TodoFinal from "./TodoFinal/TodoFinal";
import TodoEdit from "./TodoEdit/TodoEdit";
import useToggle from '../../hooks/useToggle'

const TodoCard = (props) => {

    const [edited, isEditing] = useToggle();

    return (
        <div className={`TodoCard`}>
            { !edited && <TodoFinal isEditing={isEditing} todo={props.todo} id={props.id} delete={props.delete} date={props.date}/> } 
            { edited && <TodoEdit isEditing={isEditing} todo={props.todo} edit={props.edit} id={props.id}/> } 
        </div>
    )
}

export default TodoCard;