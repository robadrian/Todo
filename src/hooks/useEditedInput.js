import { useState } from "react";

export default function useEditedInput () {
    const [editedInput, setEditedInput] = useState('');

    const onChangeHandler = (e) => {
        setEditedInput(e.target.value);
    }

    return [editedInput, onChangeHandler];
}