import React from "react";
import defaultImg from "./img/bird2.jpg";
import Audio from "./Audio";
import dataBirds from "./birds";

class Question extends React.Component {
  render() {
    const currentBird = this.props.currentBird;
    const currentCategory = this.props.level;
    const isCorrect = this.props.isCorrect;
    const currentDataBird = dataBirds[currentCategory][currentBird];
    return (
      <div className="current-question">
        <div className="wrapper">
          <div className="current-question__column">
            <div className="current-bird__image">
              <img src={isCorrect ? currentDataBird.image : defaultImg} alt="bird" />
            </div>
            <div className="current-bird__info">
              <h3 className="bird-name">{isCorrect ? currentDataBird.name : "*****"}</h3>
              <div className="audio-player">
                <Audio source={currentDataBird.audio} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
