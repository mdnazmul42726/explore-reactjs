import { useEffect, useState } from "react"

export default function Friend() {
    const [friend, setFriend] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setFriend(data))
    }, [])

    return (
        <div className="">
            <h3>Friends: {friend.length} </h3>
        </div>
    )
}