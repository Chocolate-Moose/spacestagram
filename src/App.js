import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import Card from './card/card.js';
import { fetchPictures } from './fetch-pictures';

// Animation Credits: Sakol Lalici
import LoadingRocket from './assets/rocket-loading.json';

import './style.scss';

const App = (props) => {

  const [cardInfo, setCardInfo] = useState(null);

  useEffect(() => {
    fetchPictures()
    .then(card => {
      setCardInfo(card)
    })
  }, []);
  
  const displayContent = () => {
    if (cardInfo === [] || cardInfo === undefined || cardInfo === null) {
      return (
        <div className="loading-container">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: LoadingRocket,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={300}
            width={300}
          />
          <p className="loading-text">Loading images...</p>
        </div>
      );
      
    } else {
      return (
        <div>
          <div className="header-container">
            <p className="header">Spacestagram</p>
            <p>Your one stop shop for all the fantastic and fabulous space landscapes</p>
            <p>Information brought to you by NASA's APOD API</p>
          </div>
            <div className="all-cards-container">
              {cardInfo.map((card) => {
                return (
                  <Card
                    date={card.date}
                    description={card.explanation}
                    media={card.media_type}
                    title={card.title}
                    url={card.url}
                />
                )
              })}
          </div>
        </div>
        
      )
    }
  }

  return (
    <div className="content-container">
      {displayContent()}

    </div>
  );
};

export default App;
