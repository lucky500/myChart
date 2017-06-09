import React, { Component } from 'react';
import BarChart from './components/BarChart';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[1000, 400, 232, 120, 78, 162, 390, 20, 150, 85, 30]
    }
  }
  render() {
    return (
      <div className="App">
        <BarChart data={this.state.data} />
      </div>
    );
  }
}

export default App;
