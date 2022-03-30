import { useState } from "react";

const Form = (props) => {
    const [player, setPlayer] = useState({
        playername: "",
        playerscore: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const playername = event.target.value;
        setPlayer((player) => ({ ...player, playername }));

    }

    const handleScoreChange = (event) => {
        const playerscore = event.target.value;
        setPlayer((player) => ({ ...player, playerscore }));

    }

    //A function to handle the post request
    const postPlayer = async (newPlayer) => {
        const response = await fetch('http://localhost:5001/api/players', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPlayer)
        });
        const data = await response.json();
        console.log("From the post ", data);
        //addPlayer(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postPlayer(player);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Player Name</label>
                <input
                    type="text"
                    id="add-player-name"
                    placeholder="Player Name"
                    required
                    value={player.name}
                    onChange={handleNameChange}

                />
                <label>Player Score</label>
                <input
                    type="text"
                    id="add-player-score"
                    placeholder="Player Score"
                    required
                    value={player.score}
                    onChange={handleScoreChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;