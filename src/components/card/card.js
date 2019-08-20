import React from 'react';
import './card.styles.css';

const Card = props => {

  const {monster} = props;
  
  return (
    <li className="card-container">
      <img src={`https://robohash.org/${monster.id}'?set=set4&size=180x180`} alt={monster.name}/>
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </li>
  );
}

export default Card;
