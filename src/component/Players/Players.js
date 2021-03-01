import React, { useState } from "react";
import "./Players.css";
import fakeData from "../../fakeData/playerData.json";
import Player from "../Player/Player.js";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayers.js";

const Players = () => {
  const [players, setPlayers] = useState(fakeData);
  const [player, setPlayer] = useState([]);

  const handleAddPlayers = (added) => {
      const newPlayer = [...player, added];
      setPlayer(newPlayer);
  }
  return (
    <div className="players">
      <div className="players-info">
            {
                  players.map(player => <Player players = {player} key = {player.id} handleAddPlayers ={handleAddPlayers}></Player>)
            }
      </div>
      <div className="line"></div>
      <div className="team-side">
            <SelectedPlayer player = {player}></SelectedPlayer>
      </div>
    </div>
  );
};

export default Players;
