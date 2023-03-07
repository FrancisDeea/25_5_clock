import './App.css';
import React from 'react';
import * as components from './components/export'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      currentSession: { minute: 25, second: 0 },
      isRunning: false
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleBreak = this.handleBreak.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  // Add methods here:
  handleReset() {
    this.setState({
      break: 5,
      session: 25,
      currentSession: { minute: 25, second: 0 },
      isRunning: false
    })
    if(this.interval) {clearInterval(this.interval)}
  }

  handleBreak(e) {
    const value = e.target.value;
    const breakLength = this.state.break;
    if (value === "-" && breakLength > 1) {
      this.setState(state => ({
        break: state.break - 1
      }))
    } else if (value === "+" && breakLength < 60) {
      this.setState(state => ({
        break: state.break + 1
      }))
    };
  }

  handleSession(e) {
    const value = e.target.value;
    const sessionLength = this.state.session;
    if (value === "-" && sessionLength > 1) {
      this.setState(state => ({
        session: state.session - 1,
        currentSession: { minute: state.session - 1, second: 0 }

      }))
    } else if (value === "+" && sessionLength < 60) {
      this.setState(state => ({
        session: state.session + 1,
        currentSession: { minute: state.session + 1, second: 0 }
      }))
    };
  }

  handlePlay() {
    const minute = this.state.currentSession.minute;
    const second = this.state.currentSession.second;
    const isRunning = this.state.isRunning;
    if (!isRunning) {
      this.setState({ isRunning: true });
      this.startTimer(minute, second);
    } else {
      this.setState({ isRunning: false });
      clearInterval(this.interval)
    }

  }

  startTimer(minute, second) {
    let totalSeconds = minute * 60 + second;
    totalSeconds--

    this.interval = setInterval(() => {
      this.setState({ 
        currentSession: {minute: Math.floor(totalSeconds/60), second: totalSeconds%60}
      });
      totalSeconds--
    }, 1000)
  }



  render() {
    return (
      <div id="app">
        <components.Set
          break={this.state.break}
          session={this.state.session}
          handleBreak={this.handleBreak}
          handleSession={this.handleSession}
        />
        <components.Timer
          current={this.state.currentSession}
          reset={this.handleReset}
          play={this.handlePlay}
        />
      </div>
    )
  }
}

export default App;
