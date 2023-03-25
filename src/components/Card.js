import React from 'react';
import './Card.css';

const Card = ({title, imageUrl}) => {
  return (
    <>
    <div className="card">
      <img src={`https://source.unsplash.com/random/800x800/?sig=${Math.floor(Math.random() * 100)}`} alt={title} />
      <h3>{title}</h3>
    </div>
    <div className="card">
      <img src={`https://source.unsplash.com/random/800x800/?sig=${Math.floor(Math.random() * 100)}`} alt={title} />
      <h3>{title}</h3>
    </div>
    <div className="card">
      <img src={`https://source.unsplash.com/random/800x800/?sig=${Math.floor(Math.random() * 100)}`} alt={title} />
      <h3>{title}</h3>
    </div>
    <div className="card">
      <img src={`https://source.unsplash.com/random/800x800/?sig=${Math.floor(Math.random() * 100)}`} alt={title} />
      <h3>{title}</h3>
    </div>
    <div className="card">
      <img src={`https://source.unsplash.com/random/800x800/?sig=${Math.floor(Math.random() * 100)}`} alt={title} />
      <h3>{title}</h3>
    </div>
    <div className="card">
      <img src={`https://source.unsplash.com/random/800x800/?sig=${Math.floor(Math.random() * 100)}`} alt={title} />
      <h3>{title}</h3>
    </div>
    </>
  );
};

export default Card;
