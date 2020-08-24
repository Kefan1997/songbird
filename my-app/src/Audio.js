import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      player: false
    }
  }

  render() {
    return (
    <audio controls className="player" preload="false">
      <source src={this.props.source} />
    </audio>
    );
  }
}

export default Audio;
