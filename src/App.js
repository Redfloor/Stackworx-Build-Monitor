import React, { Component } from 'react';
import ServerList from './components/Server_List';
import ServerControl from './components/Server_Control'
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { servers: ['https://test.cognition-app.com/api/status', 'https://ord.dev.stackworx.io/health', 'https://api.durf.dev.stackworx.io/health', 'https://prima.run/health', 'https://stackworx.io/'] };
  }
  //We need to refactor this later on to include additive search. Let's start out with the 5 examples for now.
  //this.setState({ servers: ['https://test.cognition-app.com/api/status', 'https://ord.dev.stackworx.io/health', 'https://api.durf.dev.stackworx.io/health', 'https://prima.run/health', 'https://stackworx.io/'] });

addNewServer = (newServer) => {
    const tempServers = this.state.servers;
    tempServers.push(newServer);
    this.setState({servers:tempServers});
}

  render() {

    console.log("serverlist: ", this.state.servers);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Build Monitor</h2>
        </div>
        <p className="App-intro">
          <ServerControl
            addNewServer = {(newServer) => this.addNewServer(newServer)}
          />
        </p>
          <ServerList servers={ this.state.servers } />
      </div>

    );
  }
}

export default App;
