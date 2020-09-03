import React from "react";
import Parrot from "./img/Parrot.jpg";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.startNewGame();
  }

  render() {
    return (
      <div className={this.props.endOfTheGame ? "modal" : "modal none"}>
        <div className="wrapper">
          <h1 className="modal__title">ПОЗДРАВЛЯЕМ!</h1>
          <h2 className="modal__text">
            {this.props.Score === 30
              ? "Вы прошли викторину и набрали"
              : "Вы набрали"}{" "}
            {this.props.Score} из 30 возможных баллов
          </h2>
          {this.props.Score === 30 ? (
            <img src={Parrot} className="modal__bird" alt="bird"></img>
          ) : (
            <button onClick={this.handleClick} className="button close-button">
              Попробовать еще раз
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
