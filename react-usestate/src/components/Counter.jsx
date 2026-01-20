import { useState } from "react";
const Counter = () => {
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    return (
        <>
            <h1>Counter</h1>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment Button</button>
            <button onClick={decrement}>Decrement Button</button>
        </>
    )
}

export default Counter
