import { useState } from "react";


export const useForm = (initialForm:any) => {
    const [formState, setFormState] = useState(initialForm)
    
    const onInputChange=({target}:{target:HTMLInputElement})=>{
        const {name,value}=target;
        console.log("2");
        
        setFormState({
            ...formState,
            [name]:value
        })
    }
    const onResetForm=()=>{
      setFormState(
          initialForm
      )
  }
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
