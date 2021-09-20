import React from 'react';

import './style.scss';

const Card = (props) => {
  const {
    date,
    description,
    title,
    url,
  } = props;
  return (
    <div className="card-background">
      <img className="space-image" src={url} alt="a cool space landscape"/>
      <div className="text-container">
        <p className="title">{title}</p>
        <p>{date}</p>
        <p>{description}</p>
      </div>
      
    </div>
  );

};

export default Card;
