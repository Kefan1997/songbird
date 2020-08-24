import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    
  }
  
  render() {
    const answers = this.props.answers.map(data => data.name);
    const listAnswers = answers.map((answer) => 
      <li className="possible-answer" onClick={this.handleClick} key={answer.toString()}>
        <span className="checkbox"></span>
        {answer}
      </li>
    );
    return (
      <div className="options">
        <div className="wrapper">
          <ul className="item-list">
            {listAnswers}
          </ul>
        </div>
      </div>
    )
  }
}

export default Options;