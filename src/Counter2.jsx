import { useState } from "react"

export default function Counter2() {
    const [count, setCount] = useState(0)

    const countHandleClick = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    return (
        <div className="">
            <h3>Counter2: {count} </h3>
            <button onClick={countHandleClick}>Counter2</button>
        </div>
    )
}