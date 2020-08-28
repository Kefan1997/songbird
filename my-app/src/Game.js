import React from "react";
import Categories from "./Categories";
import Question from "./Question";
import Options from "./Options";
import Description from "./Description";
import dataBirds from "./birds";
import Modal from "./Modal";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Score: 0,
      currentLevel: 0,
      nextLevel: false,
      isCorrect: false,
      endOfTheGame: false,
      guessBird: undefined,
      currentBird: this.randomInteger(),
      checkboxs: new Array(6).fill(false),
    };
    this.openModal = this.openModal.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  randomInteger() {
    // случайное число от min до (max+1)
    let rand = 0 + Math.random() * (5 + 1 - 0);
    return Math.floor(rand);
  }

  updateActiveBird = (index) => {
    const { checkboxs } = this.state;
    if (!this.state.nextLevel) {
      checkboxs[index] = true;
    }
    this.setState({ guessBird: index, checkboxs: checkboxs });
  };

  updateScore = (mark) => {
    this.setState({ Score: mark });
  };

  updateStatusAnswer = () => {
    this.setState({ isCorrect: true, nextLevel: true });
  };

  changeLevel = () => {
    this.setState({
      checkboxs: new Array(6).fill(false),
      currentLevel: this.state.currentLevel + 1,
      nextLevel: false,
      isCorrect: false,
      guessBird: undefined,
      currentBird: this.randomInteger(),
    });
  };

  openModal() {
    this.setState({
      endOfTheGame: true,
      currentLevel: 0,
      currentBird: this.randomInteger(),
      activeBird: undefined,
      nextLevel: false,
    });
  }

  startNewGame() {
    this.setState({ 
      endOfTheGame: false,
      Score: 0, 
      checkboxs: new Array(6).fill(false),
    });
  }

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
              <div className="score">Score:{this.state.Score}</div>
            </div>
            <Categories level={level} />
          </div>
        </div>

        <div
          className={
            this.state.endOfTheGame ? "game-controls none" : "game-controls"
          }
        >
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
                guessBird={guessBird}
                resetCheckBox={this.state.resetCheckBox}
                checkboxs={this.state.checkboxs}
                updateScore={this.updateScore}
                Score={this.state.Score}
              />
              <Description level={level} guessBird={guessBird} />
            </div>
          </div>

          <div
            className={
              this.state.nextLevel
                ? " button next-level-button next-level-button_active"
                : "button next-level-button"
            }
            onClick={
              this.state.currentLevel === 5 ? this.openModal : this.changeLevel
            }
          >
            Next Level
          </div>
        </div>
        <Modal
          startNewGame={this.startNewGame}
          endOfTheGame={this.state.endOfTheGame}
          score={this.state.Score}
        />
      </div>
    );
  }
}

export default Game;
