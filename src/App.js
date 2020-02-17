import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      message: 'initial'
    }
  }

  render() {
    return(
      <>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({...this.state, count: this.state.count + 1})}>countUp</button>
        <button onClick={() => this.setState({...this.state, count: this.state.count - 1})}>countDown</button>
        <div>
          <h2>{this.state.message}</h2>
          <input type="text" value={this.state.message} onChange={(e) => this.setState({...this.state, message:e.target.value})} />
        </div>
      </>
    )
  }
}

export default App;
