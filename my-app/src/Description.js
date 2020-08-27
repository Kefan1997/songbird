import React from "react";
import defaultImg from "./img/bird1.png";
import Audio from "./Audio";
import dataBirds from "./birds";

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentCategory = this.props.level;
    const currentBird = this.props.guessBird;
    const currentDataBird = dataBirds[currentCategory][currentBird];
    if(currentBird){
      console.log(currentDataBird.audio);
    }
    return (
      <div className="description">
        <div className="wrapper">
          <div
            className={currentDataBird ? "instruction_disable" : "instruction"}
          >
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка</span>
          </div>
          <div className={currentDataBird ? "column-2" : "column-2_disable"}>
            <div className="description__image">
              <img
                src={currentDataBird ? currentDataBird.image : defaultImg}
                alt="bird"
              />
            </div>
            <div className="description__name">
              <h3 className="description__bird-name">
                {currentDataBird ? currentDataBird.name : "*****"}
              </h3>
              <h2 className="description__bird-species">
                {currentDataBird ? currentDataBird.species : "*****"}
              </h2>
              <div className="description__audio-player">
              {currentDataBird ? <Audio source={currentDataBird.audio} /> : ""}
              </div>
            </div>
          </div>
          <div className="description__info">
            {currentDataBird ? currentDataBird.description : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
