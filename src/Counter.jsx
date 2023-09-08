import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const countHandleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    return (
        <div className="">
            <h3>Count: {count} </h3>
            <button onClick={countHandleClick}>Count</button>
        </div>
    )
}