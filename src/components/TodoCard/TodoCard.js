import React from "react";
import './TodoCard.css'
import TodoFinal from "./TodoFinal/TodoFinal";
import TodoEdit from "./TodoEdit/TodoEdit";
import useSwitch from "../../hooks/useSwitch";

const TodoCard = (props) => {

    const [value, switchValue] = useSwitch();

    return (
        <div className="TodoCard">
            { value && <TodoFinal todo={props.todo} switch={switchValue} delete={props.delete} index={props.index}/> }
            { !value && <TodoEdit todo={props.todo} switch={switchValue} index={props.index} onChange={props.onChange} edit={props.edit}/> }
        </div>
    )
}

export default TodoCard;