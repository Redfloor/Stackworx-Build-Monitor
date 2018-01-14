import React, { Component } from 'react';
import Server from './Server';

export default class ServerList extends Component  {

  render() {
    // console.log(this.props.servers);
    const serverListHTML = this.props.servers.map((server, index) => <Server server={server} key={`${index}`}/>)

    return (
      <ul className="server-list">
        {serverListHTML}
      </ul>
    );
  }
}
