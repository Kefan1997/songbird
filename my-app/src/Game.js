import React from 'react';
import Categories from './Categories';
import Question from './Question';
import Options from './Options';
import Description from './Description';
import dataBirds from './birds';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataBirds[0],
      nextLevel: false,
      currentLevel: '0'
    }
  }

  render() {
    return (
      <div className="game">
        <div className="header">
          <div className="wrapper">
            <div className="header__inner">
              <h1 className="heading">Songbird</h1>
              <div className="score">Score:</div>
            </div>
            <Categories level={this.state.currentLevel}/>
          </div>
        </div>

        <Question/>

        <div className="control-block">
          <div className="column-2">
            <Options answers={this.state.data}/>
            <Description/>
          </div>
        </div>

        <div className="button next-level-button">Next Level</div>
      </div>
      
    )
  }

}

export default Game;