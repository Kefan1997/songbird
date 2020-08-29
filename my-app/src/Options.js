import React from "react";
import classNames from "classnames";
import CorrectAudio from "./audio/correctAnswer.mp3"
import WrongAnswer from "./audio/wrongAnswer.mp3"
class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (index) => {
    this.props.updateActiveBird(index);
    if (this.props.currentBird === index) {
      new Audio(CorrectAudio).play();
      const arr = this.props.checkboxs.filter((item) => item === false);
      const mark = this.props.Score + arr.length;
      this.props.updateStatusAnswer();
      this.props.updateScore(mark);
      new Audio(CorrectAudio).play();
    }
    else if( this.props.checkboxs[index]) {
      new Audio(WrongAnswer).play();
    }
  };

  render() {
    const answers = this.props.answers.map((data) => data.name);
    const listAnswers = answers.map((answer, index) => (
      <li
        className="possible-answer"
        onClick={() => this.handleClick(index)}
        id={index}
        key={index}
      >
        <span
          className={classNames(
            "checkbox",
            {
              correct:
                index === this.props.currentBird && this.props.checkboxs[index]
            },
            {
              incorrect:
                index !== this.props.currentBird && this.props.checkboxs[index]
            }
          )}
        ></span>
        {answer}
      </li>
    ));
    return (
      <div className="options">
        <div className="wrapper">
          <ul className="item-list">{listAnswers}</ul>
        </div>
      </div>
    );
  }
}

export default Options;
