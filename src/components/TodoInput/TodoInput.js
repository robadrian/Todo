import React from "react";
import './TodoInput.css'
import { IoIosAddCircleOutline } from "react-icons/io";


const TodoInput = () => {
    return (
        <form>
            <input placeholder="New Todo"/>
            <IoIosAddCircleOutline className="addIcon" />
        </form>
    )
}

export default TodoInput;