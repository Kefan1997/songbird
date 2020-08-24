import React from 'react';
import defaultImg from './img/bird1.png';
import Audio from './Audio';

function Question() {
  return (
    <div className="current-question">
        <div className="wrapper">
          <div className="current-question__column">
            <div className="current-bird__image">
              <img src={defaultImg} alt="bird"/>
            </div>
            <div className="current-bird__info">
              <h3 className="bird-name">Журавль</h3>
              <div className="audio-player">
                <Audio source="\/\/www.xeno-canto.org\/571141\/download"/>
              </div>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Question;