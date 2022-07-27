import React from "react";
import './TodoInput.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRef } from "react";

const TodoInput = (props) => {
    
    const ref = useRef(null)

    function submitHandler (){
        props.newArray();
        ref.current.value ='';
    }

    return (
        <form>
            <input ref={ref} placeholder="New Todo" onChange={props.onChangeHandler}/>
            <IoIosAddCircleOutline className="addIcon" onClick={submitHandler}/>
        </form>
    )
}

export default TodoInput;