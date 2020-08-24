import React from 'react';
import defaultImg from './img/bird1.png';
import Audio from './Audio';
import dataBirds from './birds';

function Description() {
  return (
    <div className="description">
    <div className="wrapper">
      <div className="column-2">
        <div className="description__image">
          <img src={defaultImg} alt="bird"/>
        </div>
        <div className="description__name">
          <h3 className="description__bird-name">{dataBirds[1][0].name}</h3>
          <div className="description__audio-player">
            <Audio source="\/\/www.xeno-canto.org\/295659\/download"/>
          </div>
        </div>
      </div>
      <div className="description__info">****</div>   
    </div>
  </div>
  )
}

export default Description;