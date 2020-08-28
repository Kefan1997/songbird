import React from 'react';


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.startNewGame()
  }

  render() {
    return (
      <div className={this.props.endOfTheGame ? "modal" : "modal none"}>
        <div className="wrapper">
          <h1 className="modal__title">ПОЗДРАВЛЯЕМ!</h1>
          <h2 className="modal__text">Вы набрали {this.props.Score} из 30 баллов</h2>
          <button onClick={this.handleClick} className="button close-button">Новая игра</button>
        </div>
      </div>
    )
  }
}

export default Modal;