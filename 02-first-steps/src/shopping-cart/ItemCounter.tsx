import { useState } from "react";

interface Props {
    name: string;
    quantity?: number;
}

import './ItemCounter.css';

export const ItemCounter = ({name, quantity = 1}: Props) => {
  const [count, setCount] = useState(quantity);

  const hadleAdd = () => {
    setCount(count + 1);
  }
  const handleSubtract = () => {
    if (count === 1) return;
    setCount(count - 1);
  }
    return (
    <section 
    className="item-row"
    // style={{
    //     display: 'Flex',
    //     alignItems: 'center',
    //     gap: 10,
    //     marginTop: 10,
    // }}
    >
        <span
            className="item-text"
            style={{
                color: count === 1 ? 'red' : 'black',
            }}
            >
            {name}
        </span>
        <button onClick={hadleAdd}>+1</button>
        <span>{count}</span>
        <button onClick={handleSubtract}>-1</button>
    </section>
  )
}
