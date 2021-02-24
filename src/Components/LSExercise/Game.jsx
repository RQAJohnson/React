'use strict'
import AddGamers from './AddGamers';
import GameRoom from './GameRoom'
import {useState} from 'react';


const Game = () => {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);
 
     const newPlayer = ({ target }) => {
         setPlayerName(target.value)
     }
 
    const submitForm = (event) => {
         event.preventDefault();
    }
 
     const handleAdd = () => { 
         setPlayers(players => [...players, playerName]);
     }

    return(
        <AddGamers newPlayer={newPlayer} submitHandler={submitForm} handleAdd={handleAdd}/>
    )
}
export default Game;