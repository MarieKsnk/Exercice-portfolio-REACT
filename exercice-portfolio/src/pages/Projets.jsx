import React from 'react';
import projets from '../data/projetsData'; 
import './projets.css'



const Projets = () => {
  return (
    <div className='page-projet'>
      <h1>MES PROJETS</h1>
      {projets.map((projet) => (
        <div key={projet.id} className='projet-card'>
          <img src={projet.image} alt={projet.title} />
          <h2>{projet.title}</h2>
          <p>{projet.description}</p> 
        </div>
      ))}
    </div>
  );
};

export default Projets;
