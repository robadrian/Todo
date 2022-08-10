import { useState } from "react";

export default function useInput(prop) {
  const [input, setInput] = useState(prop);

  const getInput = (e) => {
    setInput(e.target.value);
  };
  const clear = (initial) => {
    setInput(initial);
  };
  return [input, getInput, clear];
}
