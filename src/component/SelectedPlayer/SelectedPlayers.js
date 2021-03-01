import React from 'react';
import './SelectedPlayers.css';

const SelectedPlayers = (props) => {
      const cart = props.player;
      console.log(cart);
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
            const player = cart[i];
            total = total + player.salary;
      }
      return (
            <div className="team">
               <h1>Selected Player</h1>
               <h2>Total Player: {cart.length}</h2>
               <p>Total Budget: ${total}</p>
               {
                     cart.map(info => 
                        <div className = "added-player">
                              <img src={info.img} alt=""/>
                              <p>{info.name}</p>
                              <p>Player Amount: ${info.salary}</p>
                        </div>)
               }
            </div>
      );
};

export default SelectedPlayers;