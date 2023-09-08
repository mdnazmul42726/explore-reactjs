import { useState } from "react"

export default function DeCounter() {

    const [count, setCount] = useState(100);

    const counterHandleClick = () => {
        const newCount = count - 1;
        setCount(newCount);
        
    }

    return (
        <div className="">
            <h2>Count: {count}</h2>
            <button onClick={counterHandleClick}>DeCount</button>
        </div>
    )
}