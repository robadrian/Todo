import { useState } from "react";

export default function useListUpdate() {

    const [list, setList] = useState([]);

    const addToList = (value) => {
        const listObject = {
            id: (Math.random() *1000),
            input: value
        }

        setList(prevList => [...prevList, listObject])
    }

    const editItem = (id, value) => {
        const index = list.findIndex(item => item.id === id);
        const editedListObject = {
            id: (Math.random()*10000), 
            input: value
        }
        list[index] = editedListObject;
        const newList = [...list]
        setList(newList)
    }

    const deleteItem = (id) => {
        const index = list.findIndex(item => item.id === id)
        const newArray = list.filter((item, i) => i !== index);
        setList([...newArray]);
    }

    return [list, addToList, editItem, deleteItem]
} 

