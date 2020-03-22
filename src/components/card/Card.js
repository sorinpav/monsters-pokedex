import React from 'react';
import './Card.css';
function Card(props) {
  const { name, id, email } = props.monster;
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2`} alt='monster' />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
