import React, { Component } from 'react';

class TotalTokens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }
  
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 5 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 5 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>Click to increment by 5</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 5</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default TotalTokens;