import { useEffect, useState } from "react"
import User from "./user";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUsers(data));
     }, [])

    return (
        <div className="">
            <h3>User: {users.length} </h3>
           
        </div>
    )
}