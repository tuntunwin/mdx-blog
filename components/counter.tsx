"use client"
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment} style={{ backgroundColor: 'blue', color: 'white' }}>Increment</button>
            <button onClick={decrement} style={{ backgroundColor: 'red', color: 'white' }}>Decrement</button>
        </div>
    );
};

export default Counter;
