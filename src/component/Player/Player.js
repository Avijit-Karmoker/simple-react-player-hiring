import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Player = (props) => {
      const {name, img, gender, position, salary, age} = props.players;
      return (
            <div className="player-info">
                  <div className="image">
                        <img src={img} alt=""/>
                  </div>
                  <div>
                        <h1>{name}</h1>
                        <p>Gender: {gender}</p>
                        <p>Age: {age}</p>
                        <p>Position: {position}</p>
                        <p>Monthly Salary: {salary}</p>
                        <Button onClick={() => {props.handleAddPlayers(props.players)}}><span className = "icon"><FontAwesomeIcon icon={faPlus}/></span>Hire</Button>
                  </div>
            </div>
      );
};

export default Player;