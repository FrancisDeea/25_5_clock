import './App.css';
import React from 'react';
import * as components from './components/export'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // Add methods here:


  render() {
    return (
      <div id="app">
        <components.Set />
        <components.Timer />
      </div>
    )
  }
}

export default App;
