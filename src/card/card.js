import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube'

import LikeIcon from '../assets/like.svg';

import './style.scss';

const Card = (props) => {
  const {
    date,
    description,
    media,
    title,
    url,
  } = props;

  const [clicked, setClicked] = useState(false);

  const renderImage = () => {
    if (media === "image") {
        return <img className="space-image" src={url} alt="a cool space landscape"/>
    }
    else if (media === "video") {
        return <ReactPlayer className="space-image" url={url} width="600px"/>
    }
    else {
      return <p>sorry, this media type is not yet supported!</p>
    }
  }

  return (
    <div className="card-background">
      {renderImage()}
      <div className="text-container">
        <div className="upper-container">
          <div className="title-container">
            <p className="title">{title}</p>
            <p>{date}</p>
          </div>
          <img 
            src={LikeIcon} 
            className="like-icon" 
            alt="like icon" 
            style={{filter: clicked ? "invert(53%) sepia(84%) saturate(5816%) hue-rotate(329deg) brightness(99%) contrast(100%)": "none"}}
            onClick={() => setClicked(!clicked)}
            />
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );

};

export default Card;
