import './App.css';
import React from 'react';
import * as components from './components/export'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      currentSession: {
        minute: 25,
        second: "00"
      }
    }
  }

  // Add methods here:


  render() {
    return (
      <div id="app">
        <components.Set 
          break={this.state.break}
          session={this.state.session}
        />
        <components.Timer 
          current={this.state.currentSession}
        />
      </div>
    )
  }
}

export default App;
