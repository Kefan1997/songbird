import React from "react";
import Categories from "./Categories";
import Question from "./Question";
import Options from "./Options";
import Description from "./Description";
import dataBirds from "./birds";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 1,
      nextLevel: false,
      isCorrect: false,
      guessBird: undefined,
      currentBird: this.randomInteger(),
    };
  }

  randomInteger() {
    // случайное число от min до (max+1)
    let rand = 0 + Math.random() * (5 + 1 - 0);
    return Math.floor(rand);
  }

  // isCorrectAnswer(guessBird, currentBird) {
  //   if(guessBird === currentBird) {
  //     this.setState({isCorrect: true});
  //   }
  // }

  updateActiveBird = (index) => {
    this.setState({ guessBird: index });
  };

  updateStatusAnswer = () => {
    this.setState({ isCorrect: true, nextLevel: true });
  };

  render() {
    const level = this.state.currentLevel;
    const currentBird = this.state.currentBird;
    const guessBird = this.state.guessBird;
    const isCorrect = this.state.isCorrect;

    return (
      <div className="game">
        <div className="header">
          <div className="wrapper">
            <div className="header__inner">
              <h1 className="heading">Songbird</h1>
              <div className="score">Score:</div>
            </div>
            <Categories level={level} />
          </div>
        </div>

        <Question
          level={level}
          isCorrect={isCorrect}
          currentBird={currentBird}
        />

        <div className="control-block">
          <div className="column-2">
            <Options
              answers={dataBirds[level]}
              updateActiveBird={this.updateActiveBird}
              currentBird={currentBird}
              updateStatusAnswer={this.updateStatusAnswer}
              nextLevel={this.state.nextLevel}
            />
            <Description level={level} guessBird={this.state.guessBird} />
          </div>
        </div>

        <div
          className={
            this.state.nextLevel
              ? " button next-level-button next-level-button_active"
              : "button next-level-button"
          }
        >
          Next Level
        </div>
      </div>
    );
  }
}

export default Game;
