import { useState } from "react";

const useForm = (validateFn)=>{
    const [enteredValue,setEnteredValue]=useState("");
    const [isTouched,setIsTouched]=useState(false);
    
    const valueisValid = validateFn(enteredValue);
    const hasError = !valueisValid && isTouched; 

    const valueChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
    }
    const blurHandler=(event)=>{
        setIsTouched(true);
    }
    return{
        value: enteredValue,
        hasError,
        valueChangeHandler,
        blurHandler,
        valueisValid
    }
}

export default useForm;