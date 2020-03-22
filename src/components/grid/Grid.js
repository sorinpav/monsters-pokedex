import React from 'react';
import './Grid.css';
import Card from '../card/Card';
function Grid(props) {
  const { monsters } = props;
  return (
    <div className='grid'>
      {monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default Grid;
