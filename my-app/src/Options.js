import React from "react";

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (index, elem) => {
    this.props.updateActiveBird(index);
    if (this.props.currentBird === index) {
      this.props.updateStatusAnswer();
      elem.currentTarget.firstChild.classList.add("correctly");
      
    } else if(this.props.nextLevel) {
      return;
    } else if(this.props.currentBird !== index) {
      elem.currentTarget.firstChild.classList.add("incorrectly");
    }
  };

  render() {
    const answers = this.props.answers.map((data) => data.name);
    const listAnswers = answers.map((answer, index) => (
      <li
        className="possible-answer"
        onClick={(elem) => this.handleClick(index, elem)}
        id={index}
        key={index}
      >
        <span className="checkbox"></span>
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
