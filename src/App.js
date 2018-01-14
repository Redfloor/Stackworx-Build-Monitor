import React, { Component } from 'react';
import ServerList from './components/Server_List';
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { servers: ['https://test.cognition-app.com/api/status', 'https://ord.dev.stackworx.io/health', 'https://api.durf.dev.stackworx.io/health', 'https://prima.run/health', 'https://stackworx.io/'] };
  }
  //We need to refactor this later on to include additive search. Let's start out with the 5 examples for now.
  //this.setState({ servers: ['https://test.cognition-app.com/api/status', 'https://ord.dev.stackworx.io/health', 'https://api.durf.dev.stackworx.io/health', 'https://prima.run/health', 'https://stackworx.io/'] });

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Build Monitor</h2>
        </div>
        <p className="App-intro">
          Check the console
        </p>
          <ServerList servers={ this.state.servers } />
      </div>
    );
  }
}

export default App;
