"use client"
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="text-center space-y-4">
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">Count: {count}</p>
            <div className="space-x-4">
                <button 
                    onClick={increment} 
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                    Increment
                </button>
                <button 
                    onClick={decrement} 
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
