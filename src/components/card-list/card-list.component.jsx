import React, {Component, useState} from 'react';
import './card-list.css';
import Card from '../card/card.component';

function CardList(props) {
   
    return (
        <div className='card-list'>
            {
              props.monster.map( monster => <Card key={monster.id} monster={monster} />).filter( elem => {
                  return elem.props.monster.name.includes(props.searchMonster);
              })
            }
        </div>
    )     
}
export default CardList;

