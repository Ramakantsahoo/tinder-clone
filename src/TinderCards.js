// import { listClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import db from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Emma Watson',
            url: 'https://i.pinimg.com/564x/6a/bf/54/6abf54d960c2c516c156d9ad4cf75ea0.jpg',
        },
        {
            name: 'Selena Gomez',
            url: 'https://i.pinimg.com/564x/ed/dc/0c/eddc0c6e101013a03e8a61ce9e116087.jpg',
        }, 
        {
            name: 'Robert Downey Jr.',
            url: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS8vYy2EaeIHi-nOXs2oaIrQks52cWHbC-ds66WbgVmrRrdfmfgSfVH-UsGBb0sFjzl1vxbdudVcV1k5Dg',
        }, 
        {
            name: 'Angelina Jolie',
            url: 'https://www.mrdustbin.com/en/wp-content/uploads/2020/11/angelina-jolie-1-768x900.jpg',
        }, 
        {
            name: 'Zayn Malik',
            url: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTXyNhRTeWzCSp65A2H9C5rtin3vARM6Y-WmD7rRyUoJZ4RfaogFl92-GnleFKSgWjPiV1HdLy8LhNv4RM',
        }, 
        {
            name: 'Amber Heard',
            url: 'https://www.mrdustbin.com/en/wp-content/uploads/2021/02/amber-heard.jpg',
        }, 
        {
          name: 'Kristen Stewart',
          url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Kristen_Stewart_in_2022.JPG',
      }, 
    ]);

    // useEffect(() => {
    //   const hehe = db.collection("people").onSnapshot(snapshot => (
    //     setPeople(snapshot.docs.map(doc => doc.data()))
    //   ))
    //   return () => {
    //     hehe();
    //   };
    // }, []);
 

  return (
    <div>
      {/* <h1>Tinder cards</h1> */}
      <div className="CardContainer">
      {people.map(person => (
        // Always give keys to react it allows react to efficiently re-render a list.
        // Makes your app super Fast.
        <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up','down']}
        >
            <div 
            style={{backgroundImage: `url(${person.url})`}}
            className="Card">
                <h3>{person.name}</h3>
            </div>
        </TinderCard>
      ))}
      </div>
    </div>
  )
}

export default TinderCards;
