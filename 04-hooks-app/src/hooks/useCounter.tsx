import { useState } from "react"


export const useCounter = (inicialValue: number = 1) => {
    const [counter, setCounter] = useState(inicialValue);

    const increment = () => {
        setCounter(counter + 1);
    };
    const decrement = () => {
        if (counter <= 1) return; 
        setCounter(counter - 1);
    };

  return {
    //propiedades
    counter,

    //metodos
    increment,
    decrement,
  };
};
