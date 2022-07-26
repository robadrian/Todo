import React from "react";
import './TodoFinal.css'
import { IoIosTrash, IoMdCheckmark, IoMdCreate } from "react-icons/io";
import useSwitch from "../../../hooks/useSwitch";

const TodoFinal = () => {

    const [value, switchValue] = useSwitch()

    return (
        <>
        <p className={value ? "Todo" : "TodoDone"}>Test todo, this is a longer todo, and this is an even longer todo </p>
        <div className="icons">
            <IoMdCheckmark className="icon" onClick={switchValue}/>
            <IoMdCreate className="icon"/>
            <IoIosTrash className="icon"/>
        </div>
        </>
    )
}

export default TodoFinal;