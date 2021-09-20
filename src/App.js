import React, { useEffect, useState } from 'react';

import { fetchPictures } from './fetch-pictures';
import Card from './card/card.js';

const App = (props) => {

  const [cardInfo, setCardInfo] = useState([]);


  useEffect(() => {
    // setCardInfo(fetchPictures());
    fetchPictures()
    .then(card => {
      setCardInfo(card)
    })
  }, []);

  
  const getpics = () => {
    if (cardInfo !== [] && cardInfo !== undefined) {
      console.log('card info', cardInfo);
      return (
        <div className="App">
          <p>welcome to spacestagram</p>
          <Card
            date={cardInfo.date}
            description={cardInfo.explanation}
            title={cardInfo.title}
            url={cardInfo.url}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <p>laodingx</p>
        </div>
      );
    }
  }

  return (
    <div>
      <p>Spacestagram</p>
      <p>Your one stop shop for all the fantastic and fabulous space landscapes</p>
      <p>Information brought to you by NASA's APOD API</p>
      {getpics()}

    </div>
  );

};

export default App;
