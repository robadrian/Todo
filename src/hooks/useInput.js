import { useState } from "react";

export default function useInput() {
    
    const [input, setInput] = useState('');

    function onChangeHandler(e) {
        setInput(e.target.value);
    }
    return [input, onChangeHandler]
}