import { useState, useEffect } from "react";
import Form from "./Form";

function Players() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/players")
        .then((response) => response.json())
        .then(players =>{
        setPlayers(players); 
        })
        
    }, []);

    

    const addPlayer = (newPlayer) => {
        setPlayers((players) => [...players, newPlayer]);
    }


    return (
      <div className="students">
        <h2> List of Players </h2>
        <ul>
            {players.map(player =>
                <li key={player.id}><b>Player:</b>  {player.playername} <b>Score:</b> {player.playerscore}</li>)}
        </ul>
        <Form addStudent={addPlayer} />
      </div>
    );
  }
  
  export default Players;