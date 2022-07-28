import { useState } from "react";

export default function useInput() {

    const [input, setInput] = useState('');

    const getInput = (e) => {
        setInput(e.target.value);
    }
    const clear = (initial) => {
        setInput(initial);
    }
    return [input, getInput, clear];
}