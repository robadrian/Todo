import React from "react";
import './TodoInput.css'
import { IoIosAddCircleOutline } from "react-icons/io";
import useInput from "../../hooks/useInput";

const TodoInput = (props) => {

    const [todo, setTodo, clear] = useInput();
    
    const onClickHandler = () => {
        if(todo.length > 5) {
            props.addToList(todo);
            clear('');
        } else {
            alert('Please write more than 5 Characters')
        }
        
    }

    return (
        <form>
            <input placeholder="New Todo" value={todo} onChange={setTodo}/>
            <IoIosAddCircleOutline className="addIcon" onClick={onClickHandler}/>
        </form>
    )
}

export default TodoInput;