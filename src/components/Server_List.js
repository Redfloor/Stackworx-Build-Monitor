import React, { Component } from 'react';
import Server from './Server';

export default class ServerList extends Component  {
  constructor(props) {
    super(props);

    this.state = { serverResponses: this.forceObjects() };
  }

    async ServerCalls() {
      const serverListResponse = await Promise.all(this.props.servers.map(async (server, index) => {
        try {const res = await fetch(server, {method: 'GET'})
          const output = {url: server, status: res.status, ok:res.ok };
          return output;
        } catch(err) {
          return { url: server, status: 400, ok:false };
        }
      }));
     this.setState({ serverResponses : serverListResponse });
   }
   forceObjects() {
     const tempArr = [];
     this.props.servers.forEach(server => {
       const stateObj = Object.assign({}, server)
       stateObj.url = server;
       stateObj.status = "loading";
       stateObj.ok = "unknown"
       tempArr.push(stateObj);
     })
     return tempArr;
   }

   componentWillMount() {
     this.checkTimer = setInterval(this.ServerCalls(), 300000);
    }
    componentWillUnmount() {
      clearInterval(this.checkTimer);
    }

   render() {
     const ServerListJSX = this.props.servers.map((server, index) => {
       return (
         <Server
          key={`${server.server}-${index}` }
          server={server.server}
          response={server.status}
          updateServer = {(server) =>this.updateServer(server)}
          />
        );
     });
     return (
       <ul className="server-list">
          {ServerListJSX}
       </ul>
     );
   }
 }
