import React from "react";

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: false,
    };
  }

  render() {
    return (
      <audio
        src={this.props.source}
        controls
        className="player"
        preload="false"
      ></audio>
    );
  }
}

export default Audio;
