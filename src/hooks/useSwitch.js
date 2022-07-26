import { useState } from "react";

export default function useSwitch () {
    const [value, setValue] = useState(true);
    
    function switchValue (value) {
        setValue(currentValue => 
            value === false ? value : !currentValue)
    }
    return [value, switchValue]
}