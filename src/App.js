import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <CounterButton></CounterButton>
        <CounterButton></CounterButton>
        <CounterButton></CounterButton>
      </div>
    );
  }
}

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  addCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addCounter}>{this.state.counter}</button>
      </div>
    );
  }
}

export default App;