import { useEffect, useState } from "react";
import Nazmul from "./nazmul";

export default function Nazmuls() {
    const [nazmuls, setNazmuls] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setNazmuls(data))

    }, [])
    return (
        <div className="">
            <h2>Nazmul: {nazmuls.length}</h2>
            {
                nazmuls.map(nazmul=> <Nazmul nazmul={nazmul}></Nazmul>)
            }
        </div>
    )
}