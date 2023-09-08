import { useState } from "react"

export default function Player() {
    const [count, setCount] = useState(11);

    const addPlayerHandleClick = () => {
        const newPlayer = count + 1;
        setCount(newPlayer);
    };

    const removePlayerHandleClick = () => {
        if (count > 0) {
            setCount(count -1);
        }else{
            alert('Sorry!! No Player Avalable For Remove');
        }
    };

    const playerStyle = {
        marginLeft: '10px'
    };


    return (
        <div className="player">
            <h3>Player: {count} </h3>
            <button onClick={addPlayerHandleClick}>Add Player</button>
            <button style={playerStyle} onClick={removePlayerHandleClick}>Remove Player</button>
        </div>
    )
};