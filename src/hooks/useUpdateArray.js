import { useState } from "react";
import useInput from './useInput';

export default function useUpdateArray() {

    const [input, onChangeHandler] = useInput()
    const [array, setArray] = useState([]);

    const todo = {
        id: (Math.random() * 1000).toFixed(),
        input: input
    }

    function newArray () {
        setArray(prevArray => {
            return [...prevArray, todo]})
    }

    function deleteArray (index) {
        const delArr = array.filter((item, i) => i !== index);
        setArray([...delArr]);
    }

    function edit (id, index, editedInput) {
        const editedTodo = {
            id: id, 
            input:editedInput
        }
        array[index] = editedTodo;
        const newArray = [...array];
        setArray(newArray);      
    }


    return [array, newArray, edit, deleteArray, onChangeHandler]
}