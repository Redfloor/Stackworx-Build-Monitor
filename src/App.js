import React, { Component } from 'react';
import ServerList from './components/Server_List';
import ServerControl from './components/Server_Control'
import logo from './logo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { servers: [
      {server:'https://test.cognition-app.com/api/status', status:'loading', ok:'unknown'},
      {server:'https://ord.dev.stackworx.io/health', status:'loading', ok:'unknown'},
      {server:'https://api.durf.dev.stackworx.io/health', status:'loading', ok:'unknown'},
      {server:'https://prima.run/health', status:'loading', ok:'unknown'},
      {server:'https://stackworx.io/', status:'loading', ok:'unknown'}]
    }
      //Need to convert the above to a map.
  }

addNewServer = (newServer) => {
    const tempServers = this.state.servers;
    tempServers.push({server: newServer, status:'loading', ok:'unknown'});
    this.setState({servers:tempServers});
}

async updateServer(server) {
    try {const res = await fetch(server, {method: 'GET'})
      const output = {url: server, status: res.status, ok:res.ok };
      return output;
    } catch(err) {
      return { url: server, status: 400, ok:false };
    }
}

  render() {

    console.log("serverlist: ", this.state.servers);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Build Monitor</h2>
        </div>
        <div className="App-intro">
          <ServerControl
            addNewServer = {(newServer) => this.addNewServer(newServer)}
          />
        </div>
          <ServerList
            servers={ this.state.servers }
            updateServer = {(server) =>this.updateServer(server)}
            />
      </div>

    );
  }
}

export default App;
