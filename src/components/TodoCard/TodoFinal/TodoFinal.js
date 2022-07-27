import React from "react";
import './TodoFinal.css'
import { IoIosTrash, IoMdCheckmark, IoMdCreate } from "react-icons/io";
import useSwitch from "../../../hooks/useSwitch";

const TodoFinal = (props) => {

    const [value, switchValue] = useSwitch()

    const deleteHandler = () => {
        props.delete(props.index);
    }

    return (
        <>
        <p className={value ? "Todo" : "TodoDone"}>{props.todo}</p>
        <div className="icons">
            { value && <IoMdCheckmark className="icon" onClick={switchValue}/> }
            { value && <IoMdCreate className="icon" onClick={props.switch}/> }
            <IoIosTrash className="icon" onClick={deleteHandler}/>
        </div>
        </>
    )
}

export default TodoFinal;