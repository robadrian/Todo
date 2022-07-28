import React from "react";
import './TodoFinal.css'
import { IoIosTrash, IoMdCheckmark, IoMdCreate, IoIosArrowForward } from "react-icons/io";
import useToggle from "../../../hooks/useToggle";

const TodoFinal = (props) => {

    const [completed, setToCompleted] = useToggle();

    const onClickHandler = () => {
        props.delete(props.id);
    }

    return (
        <>
        <p className={!completed ? "Todo" : "TodoDone"}>{props.todo}</p>
        <div className="icons">
            {!completed && <IoMdCheckmark className="icon" onClick={setToCompleted}/> }
            {!completed && <IoMdCreate className="icon" onClick={props.isEditing}/>} 
            {completed && <IoIosTrash className="icon" onClick={onClickHandler} /> }
            {completed && <IoIosArrowForward className="icon" onClick={setToCompleted}/> }
        </div>
        </>
    )
}

export default TodoFinal;